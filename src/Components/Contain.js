import React, { Fragment } from 'react'
import classes from './Contain.module.css'
import Moves from './Moves'
import img from '../image/loading.gif'

const Contain = (props) => {
    return (
        <Fragment>
            <div className={classes.contain}>
                {!props.loadstate && props.data.length > 0 && props.data.map(movie => (
                    <Moves
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        description={movie.description}
                    />
                ))}
                {!props.loadstate && !props.error && props.data.length === 0 && <span>not found moves.</span>}
                {!props.loadstate && props.error && <span>{props.error}</span>}
                {props.loadstate && <span className={classes.img}><img src={img} alt="loading gif"/></span>}
            </div>

        </Fragment>
    )
}

export default Contain