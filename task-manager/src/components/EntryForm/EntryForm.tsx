import { useEffect, useState } from "react";
import type { FC, FormEvent } from "react"
import styles from "./EntryForm.module.css"
import type { TTaskItem } from "../../types/types";

type TEntryFormProps = {
    fetchTasks: Function;
    item: TTaskItem;
    formRef: React.RefObject<HTMLDialogElement | null>;
    close: Function;
}

export const EntryForm: FC<TEntryFormProps> = ({ fetchTasks, item, formRef, close }) => {

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [date, setDate] = useState<string>("")

    useEffect(() => {
        if (item) {
            setTitle(item.title)
            setDescription(item.description)
            setStatus(item.status)
            setDate(item.dateDue)
        }
    }, [item])

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (item.title) {
            fetch(`http://localhost:5000/tasks/${item.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    id: item.id,
                    title: title,
                    description: description,
                    status: status,
                    dateDue: date
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } else {
            fetch("http://localhost:5000/tasks", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    status: status,
                    dateDue: date
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }
        setTimeout(() => fetchTasks(), 100)
        close()
    }

    return (
        <dialog ref={formRef} id="entry-form" className={styles.entryFormDialog}>
            <form onSubmit={submitHandler} className={styles.inputForm}>
                <label>Title
                    <input type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                </label>
                <label>Description
                    <textarea name="title" value={description} onChange={(event) => setDescription(event.target.value)} />
                </label>
                <label>Status
                    <select name="status" defaultValue="default" onChange={(event) => setStatus(event.target.value)} >
                        <option value="default">Please select</option>
                        <option value="Unassigned">Unassigned</option>
                        <option value="Assigned">Assigned</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </label>
                <label>Date
                    <input type="date" name="datetime" value={date} onChange={(event) => setDate(event.target.value)} />
                </label>
                <button>{item.title ? "Update task": "Add task"}</button>
                <button type="button" onClick={() => close()}>Cancel</button>
            </form>
        </dialog>
    )
}