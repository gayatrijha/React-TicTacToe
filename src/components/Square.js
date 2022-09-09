import React from 'react'
const Square = (props) => {
  return (
    <div className='container;'>
      <button disabled={props.disabled} className='btn' onClick={()=>props.onClick()}>{props.board}</button>
    </div>
  )
}

export default Square
