import { useState, useEffect } from 'react'
import axios from 'axios'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

const API_URL = 'http://localhost:5000/api'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingTask, setEditingTask] = useState(null)

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/tasks`)
      setTasks(response.data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch tasks. Please try again later.')
      console.error('Error fetching tasks:', err)
    } finally {
      setLoading(false)
    }
  }

  // Add a new task
  const addTask = async (task) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, task)
      setTasks([...tasks, response.data])
    } catch (err) {
      setError('Failed to add task. Please try again.')
      console.error('Error adding task:', err)
    }
  }

  // Update a task
  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`${API_URL}/tasks/${id}`, updatedTask)
      setTasks(tasks.map(task => task.id === id ? response.data : task))
      setEditingTask(null)
    } catch (err) {
      setError('Failed to update task. Please try again.')
      console.error('Error updating task:', err)
    }
  }

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`)
      setTasks(tasks.filter(task => task.id !== id))
    } catch (err) {
      setError('Failed to delete task. Please try again.')
      console.error('Error deleting task:', err)
    }
  }

  // Set task to edit
  const editTask = (task) => {
    setEditingTask(task)
  }

  // Cancel editing
  const cancelEdit = () => {
    setEditingTask(null)
  }

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="container">
      <header className="header">
        <h1>Task Manager</h1>
      </header>

      {error && <div className="error-message">{error}</div>}

      <TaskForm 
        onAddTask={addTask} 
        editingTask={editingTask}
        onUpdateTask={updateTask}
        onCancelEdit={cancelEdit}
      />

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <TaskList 
          tasks={tasks} 
          onDeleteTask={deleteTask} 
          onEditTask={editTask} 
        />
      )}
    </div>
  )
}

export default App