import React, { useRef } from 'react'

const SearchItem = ({ search, setSearch }) => {
  const searchInput = useRef();


  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor='search'>Search</label>
        <input
          autoComplete="off"
          id='search'
          type='search'
          role='searchbox'
          placeholder='Search Items'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={searchInput}
        />

      </div>
    </form>
  )
}

export default SearchItem