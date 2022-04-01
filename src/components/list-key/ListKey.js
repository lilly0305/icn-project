import React from 'react'
import ItemList from './ItemList';

export const ListKey = ({items, handleCheck, handleDelete}) => {

  return (
    <div className='listKey'>
      <h1>List와 key</h1>
  
      <div className='list'>
        {items.length ? (
          <ItemList 
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ) : (
          <p style={{marginTop: '2rem'}}>Your list is empty!</p>
        )}
      </div>
    </div>
  )
}
