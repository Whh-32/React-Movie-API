import React, { useRef, useState } from 'react'
import classes from './Inputs.module.css'


const Inputs = (props) => {
  const title = useRef('');
  const description = useRef('');
  const [titleValid, setTitleValid] = useState(true)
  const [desvalid, setDesValid] = useState(true)


  const clickHandler = () => {
    if (description.current.value.length === 0 || title.current.value.length === 0) {
      title.current.value.length === 0 ? setTitleValid(false) : setTitleValid(true)
      description.current.value.length === 0 ? setDesValid(false) : setDesValid(true)
      return;
    }

    setTitleValid(true);
    setDesValid(true);
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
      <input
        id='title'
        placeholder="Title"
        ref={title}
        style={titleValid ? {} : { border: "1px solid rgb(236, 55, 55)" }}
      />

      <label htmlFor='description'>Description</label>
      <textarea
        id='description'
        placeholder="Description"
        ref={description}
        style={desvalid ? {} : { border: "1px solid rgb(236, 55, 55)" }}
      />
      
      <button onClick={clickHandler}>Add Movie</button>
    </div>
  )
}

export default Inputs