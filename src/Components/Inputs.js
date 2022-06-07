import React, { useRef } from 'react'
import classes from './Inputs.module.css'


const Inputs = (props) => {
  const title = useRef('');
  const description = useRef('');

  const clickHandler = () => {
    const movie = {
      title: title.current.value,
      description: description.current.value
    }
    props.onAdd(movie);
    title.current.value = '';
    description.current.value = '';
  }

  return (
    <div className={classes.inputs}>
      <label htmlFor='title'>Title</label>
      <input id='title' placeholder="Title" ref={title} />
      <label htmlFor='description'>Description</label>
      <textarea id='description' placeholder="Description" ref={description} />
      <button onClick={clickHandler}>Add Movie</button>
    </div>
  )
}

export default Inputs