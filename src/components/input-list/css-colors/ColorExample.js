import React from 'react'
import colorNames from 'colornames';

const ColorExample = ({ cssColors, setColorName, setHexValue }) => {

  return (
    <ul>
      {
        cssColors.map((cssColor) => {
          return(
            <li 
              key={cssColor.id}
              style={{
                background: cssColor.name,
                color: cssColor.dark ? "#fff" : "#333"
              }} 
              onClick={(e) => {
                setColorName(e.target.innerText);
                setHexValue(colorNames(e.target.innerText));
              }}
            >
              {cssColor.name}
            </li>
          )
        })
      }
      
    </ul>
  )
}

export default ColorExample