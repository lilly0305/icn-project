import React from 'react'

export const GroceryFooter =({length}) => {
  const today = new Date();

  return (
    <footer className='groceryFooter'>
      <p>Copyright &copy; {today.getFullYear()}</p>
      <p><strong>{length}</strong> List {length === 1 ? "item" : "items"}</p>
    </footer>
  )
}
