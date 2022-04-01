import React from 'react'

const Square = ({colorName, hexValue }) => {
  return (
    <div>
      <span style={{backgroundColor: colorName}}></span>
      <p>
        {colorName ? colorName : "colors"}
        <em>{hexValue ? hexValue : null}</em>
      </p>
      
    </div>
  )
}

Square.defaultProps = {
  colorName: 'Empty Color Name'
}

export default Square