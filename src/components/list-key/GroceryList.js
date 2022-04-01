import React, { useState } from 'react'
import 'components/scss/list-key.scss';
import { ListKey } from './ListKey'
import { GroceryFooter } from './GroceryFooter';

export const GroceryList =() => {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        checked: false,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
      },
      {
        id: 2,
        checked: false,
        item: 'One half pound bag of Cocoa Covered Almonds UnsaltedOne half pound bag of Cocoa Covered Almonds Unsalted'
      },
      {
        id: 3,
        checked: false,
        item: 'Item 3'
      }
    ]
  );

  const handleCheck =(id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }

  return (
    <div className='groceryList'>
      <ListKey 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
  
      <GroceryFooter length={items.length}/>
    </div>
  )
}
