import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ tasks, onDeleteTask, onEditTask }) {
  if (tasks.length === 0) {
    return <p>No tasks found. Add a new task to get started!</p>
  }

  return (
    <div>
      <h2>Your Tasks</h2>
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={onDeleteTask} 
            onEdit={onEditTask} 
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList