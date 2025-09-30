import type { FC } from "react"
import styles from "./TaskItem.module.css"
import type { TTaskItem } from "../../types/types"

type TTaskItemProps = {
    item: TTaskItem;
    setFormItem: React.Dispatch<React.SetStateAction<TTaskItem>>;
    open: Function;
    fetchTasks: Function;
}

export const TaskItem: FC<TTaskItemProps> = ({ item, setFormItem, open, fetchTasks }) => {
    const handleEdit = () => {
        setFormItem(item)
        open()
    }

    const handleDelete = () => {
        fetch(`http://localhost:5000/tasks/${item.id}`, {
            method: "DELETE",
        });
        fetchTasks()
    }

    return (
        <li className={styles.taskItemGroup}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.status}>{item.status}</p>
            <p className={styles.dueDate}>{item.dateDue.toLocaleString()}</p>
            <button className={styles.edit} type="button" onClick={handleEdit}>Edit</button>
            <button className={styles.delete} type="button" onClick={handleDelete}>Delete</button>
        </li>
    )
}