import React from 'react'

const Modal = (props) => {
  return (
    <div className='modalWrap'>
      {
        props.open ? 
        (
          <div className='modal'>
            <button onClick={props.close}>닫기</button>
            <header>{props.header}</header>
            <p>{props.children}</p>
          </div>
        )
        : null
      }
    </div>
    
  )
}

export default Modal