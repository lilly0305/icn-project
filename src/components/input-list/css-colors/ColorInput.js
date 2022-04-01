import React from 'react'
import colorNames from 'colornames';

const ColorInput = ({ colorName, setColorName, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Add Color Name:
      </label>

      <input 
        placeholder='Add Color Name'
        autoFocus
        value={colorName}
        type='text'
        required
        onChange={(e) => {
          setColorName(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />

    </form>
  )
}

export default ColorInput