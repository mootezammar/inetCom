import React from 'react'

function TaskItem({ task, onDelete, onEdit }) {
  const getStatusClass = (status) => {
    switch (status) {
      case 'pending':
        return 'status-pending'
      case 'in progress':
        return 'status-in-progress'
      case 'completed':
        return 'status-completed'
      default:
        return ''
    }
  }

  return (
    <div className="task-card">
      <span className={`task-status ${getStatusClass(task.status)}`}>
        {task.status}
      </span>
      <h3>{task.title}</h3>
      <p>{task.description || 'No description provided'}</p>
      
      <div className="task-actions">
        <button 
          className="btn btn-primary" 
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button 
          className="btn btn-danger" 
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem