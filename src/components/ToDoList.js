import React from 'react'
import Card from './Card';
import { FaTrash, FaEdit } from 'react-icons/fa'

function ToDoList({ list, changeStatus, deleteTask, setItemToEdit }) {
  if (list && list.length === 0) {
    return (
      <Card>No task to do</Card>
    )
  }

  return (
    <Card>
      {list.map(el => (
        <div key={el.id} className='task' style={{ textDecoration: el.done && 'line-through' }}>
          <input type="checkbox" checked={el.done} onChange={() => changeStatus(el)} />
          <div>{el.task}</div>
          <div className='action-buttons'>
            <FaTrash onClick={() => deleteTask(el.id)} />
            <FaEdit onClick={() => setItemToEdit(el)} />
          </div>
        </div>
      ))
      }
    </Card >
  )
}

export default ToDoList;