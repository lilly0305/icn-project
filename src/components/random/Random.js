import React, { useState } from 'react'

const Random =() => {
  const [randomName, setRandomName] = useState('Bob');

  const handleNameChange = () => {
    const names = ['Bob', 'Dave', 'Kevin'];
    const int = Math.floor(Math.random() * 3);
    setRandomName(names[int]);
  }

  return (
    <div className='random'>
      <h1>Groceries List</h1>

      <div className='groceryList'>
        this is : {randomName}

        <button onClick={handleNameChange}>랜덤 이름 생성</button>
      </div>
    </div>


  )
}

export default Random