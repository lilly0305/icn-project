import React from 'react'
import ItemList from './ItemList';

export const ListKey = ({items, handleCheck, handleDelete}) => {

  return (
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
  )
}
