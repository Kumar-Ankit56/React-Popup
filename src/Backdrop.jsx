import React from 'react'
import './Todo.css'

export default function Backdrop(props) {
  return (
    <div>
      <div className="backdrop" onClick={props.onCancel}></div>
    </div>
  )
}
