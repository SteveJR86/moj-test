import type { FC } from "react"
import styles from "./TaskItem.module.css"
import type { TTaskItem } from "../../types/types"

type TTaskItemProps = {
    item: TTaskItem;
    setFormItem: React.Dispatch<React.SetStateAction<TTaskItem>>;
    open: Function;
}

export const TaskItem: FC<TTaskItemProps> = ({ item, setFormItem, open }) => {
    const handleEdit = () => {
        setFormItem(item)
        open()
    }

    const handleDelete = () => {
        fetch(`http://localhost:5000/tasks/${item.id}`, {
            method: "DELETE",
        });
    }

    return (
        <li className={styles.taskItemGroup}>
            <p>{item.title}</p>
            <p>{item.status}</p>
            <p>{item.dateDue.toLocaleString()}</p>
            <button type="button" onClick={handleEdit}>Edit</button>
            <button type="button" onClick={handleDelete}>Delete</button>
        </li>
    )
}