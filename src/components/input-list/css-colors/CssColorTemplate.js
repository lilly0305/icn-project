import React, { useState } from 'react'
import ColorExample from './ColorExample';
import ColorInput from './ColorInput';
import Square from './Square';

const CssColorTemplate = () => {
  const [colorName, setColorName] = useState('');
  const [hexValue, setHexValue] = useState('');

  const cssColors = [
    {
      id: 1,
      name: 'PaleVioletRed',
      dark: true
    },
    {
      id: 2,
      name: 'Plum',
      dark: false
    },
    {
      id: 3,
      name: 'IndianRed',
      dark: true
    },
    {
      id: 4,
      name: 'LightSalmon',
      dark: false
    },
    {
      id: 5,
      name: 'Gold',
      dark: false
    },
    {
      id: 6,
      name: 'DarkSeaGreen',
      dark: false
    },
    {
      id: 7,
      name: 'MediumTurquoise ',
      dark: false
    },
    {
      id: 8,
      name: 'CornflowerBlue',
      dark: true
    },
    {
      id: 9,
      name: 'SaddleBrown',
      dark: true
    },
    {
      id: 10,
      name: 'SeaShell',
      dark: false
    },
    {
      id: 11,
      name: 'DimGray',
      dark: true
    }
  ]

  return (
    <div className='cssColors'>
      <h1>Css Colors</h1>

      <main>
        <Square 
          colorName={colorName}
          hexValue={hexValue}
        />
  
        <ColorInput 
          colorName={colorName}
          setColorName={setColorName}
          setHexValue={setHexValue}
        />

        <ColorExample 
          cssColors={cssColors}
          setColorName={setColorName}
          setHexValue={setHexValue}
        />

      </main>
    </div>
  )
}

export default CssColorTemplate