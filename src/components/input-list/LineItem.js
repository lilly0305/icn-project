import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item'>
      <div className='inputLabel'>
        <input
          type="checkbox"
          checked={item.checked} 
          onChange={() => handleCheck(item.id)}
        />
        <label
          style={(item.checked) ? {textDecoration : 'line-through'} : null}
          onDoubleClick={() => handleCheck(item.id)}
        >{item.item}</label>
      </div>
      <FaTrashAlt 
        role="button" 
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  )
}

export default LineItem