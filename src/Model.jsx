import React from 'react'
import './Todo.css'

export default function Model(props) {
  return (
    <div className='modal'>
    <p>Are You sure</p>
    <button className="btn btn-alt" onClick={props.onCancel}>Cancle</button>
    <button className="btn" onClick={props.onConfirm}>Confirm</button>
    </div>
  )
}
