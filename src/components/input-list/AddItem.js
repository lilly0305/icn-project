import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <div className='inputLabel'>
          <label htmlFor='addItem'>Add Item</label>
          <input
            autoComplete="off"
            autoFocus
            ref={inputRef}
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
    
          <button
            type='submit'
            aria-label='Add Item'
            onClick={() => inputRef.current.focus()}
          >
            <FaPlus />
          </button>
      </div>
    </form>
  )
}

export default AddItem