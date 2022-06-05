import React from 'react'
import classes from './Moves.module.css'

const Moves = (props) => {
  return (
    <div className={classes.moves}>
        <div className={classes.moveTitle}>{props.title}</div>
        <div className={classes.moveDescription}>{props.description}</div>
    </div>
  )
}

export default Moves