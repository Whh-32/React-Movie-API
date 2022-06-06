import React from 'react'
import classes from './Inputs.module.css'

const Inputs = () => {
  return (
    <div className={classes.inputs}>
        <label>Title</label>
        <input placeholder="Title" />
        <label>Description</label>
        <textarea placeholder="Description" />
    </div>
  )
}

export default Inputs