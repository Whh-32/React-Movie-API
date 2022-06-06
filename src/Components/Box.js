import React, { Fragment, useState, useEffect, useCallback } from 'react'
import classes from './Box.module.css'
import Contain from './Contain'
import Inputs from './Inputs';

const Box = () => {
    const [move, setMove] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const feachDataHandler = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch('https://react-api-b452e-default-rtdb.firebaseio.com');
            if (!response.ok) {
                throw new Error('something went wrong!')
            }
            const data = await response.json();
            const moves = data.results.map(move => {
                return {
                    id: move.episode_id,
                    title: move.title,
                    description: move.opening_crawl
                }
            })
            setMove(moves)
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
        setLoading(false)

    }, []);

    useEffect(() => {
        feachDataHandler()
    }, [feachDataHandler])



    return (
        <Fragment>
            <Inputs />
            <div className={classes.box}>
                <button onClick={feachDataHandler} className={classes.button}>feach data</button>
            </div>
            <Contain data={move} loadstate={loading} error={error} />
        </Fragment>

    )
}

export default Box