import './App.css'
import { TaskList } from './components/TaskList/TaskList'
import { EntryForm } from './components/EntryForm/EntryForm'
import { useState, useEffect } from 'react'
import type { TTaskItem } from './types/types'
import { useDialog } from './hooks/useDialog'

function App() {
  const emptyTask = {
    id: "",
    title: "",
    description: "",
    status: "",
    dateDue: ""
  }
  const [formItem, setFormItem] = useState<TTaskItem>(emptyTask)
  const formDialog = useDialog();
  const handleNewTask = () => {
    setFormItem(emptyTask)
    formDialog.open()
  }

  const [taskItems, setTaskItems] = useState<TTaskItem[]>([])

  const fetchTasks = () => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTaskItems(data))
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <>
      <h1>MoJ Coding Challenge - Task Manager</h1>
      <TaskList setFormItem={setFormItem} open={formDialog.open} taskItems={taskItems} fetchTasks={fetchTasks} />
      <EntryForm fetchTasks={fetchTasks} item={formItem} formRef={formDialog.dialogRef} close={formDialog.close} />
      <button type="button" onClick={handleNewTask}>Add New Task</button>
    </>
  )
}

export default App
