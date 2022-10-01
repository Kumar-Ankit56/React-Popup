import React from 'react'
import { useState } from 'react'
import Backdrop from './Backdrop';
import Model from './model';
import './Todo.css'

export default function Todo(props) {
  const [showModel , setmodelState]=useState(false);
  function deleteHandler(){
    setmodelState(true);
  };
  function CancelHanderler(){
    setmodelState(false)
  }
  


  return (
    <>
    <div className='card'>
       <h2>{props.text}</h2>
       <div className="bttom">
        <button className="btn" onClick={deleteHandler}>Delete</button>
       </div>
    </div>
    {showModel && <Model onCancel={CancelHanderler} onConfirm={CancelHanderler}/>}
    {showModel && <Backdrop onCancel={CancelHanderler}/>}
    </>
  )
}
