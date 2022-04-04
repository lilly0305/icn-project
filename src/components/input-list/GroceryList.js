import React, { useState } from 'react'
import 'components/scss/list-key.scss';
import { ListKey } from './ListKey'
import { GroceryFooter } from './GroceryFooter';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

export const GroceryList =() => {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
  
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];

    setAndSaveItems(listItems);
  }

  const handleCheck =(id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);

    setAndSaveItems(listItems);
  }
  console.log(items);
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);

    setAndSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;

    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className='listKey'>
      <h1>List와 key</h1>
      <div className='groceryList'>
      
        <AddItem 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
  
        <SearchItem 
          search={search}
          setSearch={setSearch}
        />

        <ListKey
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
    
        <GroceryFooter length={items.length}/>
      </div>
    </div>
  )
}
