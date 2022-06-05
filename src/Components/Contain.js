import React, { Fragment } from 'react'
import classes from './Contain.module.css'
import Moves from './Moves'

const Contain = (props) => {
    return (
        <Fragment>
            <div className={classes.contain}>
                {!props.loadstate && props.data.length > 0 && props.data.map(move => (
                    <Moves
                        key={move.id}
                        id={move.id}
                        title={move.title}
                        description={move.description}
                    />
                ))}
                {!props.loadstate && !props.error && props.data.length === 0 && <span>not found moves.</span>}
                {!props.loadstate && props.error && <span>{props.error}</span>}
                {props.loadstate && <span>Loading...</span>}
            </div>

        </Fragment>
    )
}

export default Contain