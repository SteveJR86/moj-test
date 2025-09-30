import { TaskItem } from "../TaskItem/TaskItem"
import styles from "./TaskList.module.css"
import type { FC } from "react"
import type { TTaskItem } from "../../types/types"

type FormSetter = {
    setFormItem: React.Dispatch<React.SetStateAction<TTaskItem>>
    open: Function;
    taskItems: TTaskItem[];
    fetchTasks: Function;
}

export const TaskList: FC<FormSetter> = ({ setFormItem, open, taskItems, fetchTasks }) => {

    return (
        <div>
            <div className={styles.taskListHeadings}>
                <p>Title</p>
                <p>Status</p>
                <p>Due Date</p>
            </div>
            <ul className={styles.taskListItems}>
                {taskItems !== undefined && taskItems.length > 0 ?
                    taskItems.map((item) => {
                        return <TaskItem key={item.id} item={item} setFormItem={setFormItem} open={open} fetchTasks={fetchTasks} />
                    })
                : <p>No tasks recorded yet.</p>}
            </ul>
        </div>
    )
}