import React, { Fragment, useState, useEffect, useCallback } from 'react'
import classes from './Box.module.css'
import Contain from './Contain'
import Inputs from './Inputs';

const Box = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const feachDataHandler = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)
            const response = await fetch('https://react-api-b452e-default-rtdb.firebaseio.com/data.json');
            if (!response.ok) {
                const message = 'something went wrong!'
                throw new Error(message)
            }
            const data = await response.json();

            const movies = []
            for (const key in data) {
                movies.push({
                    id: key,
                    title: data[key].title,
                    description: data[key].description
                })
            }
            setMovie(movies);

        } catch (error) {
            setError(error.message)
        }
        setLoading(false)

    }, []);

    useEffect(() => {
        feachDataHandler()
    }, [feachDataHandler])


    async function addMovie(movie) {
        const respons = await fetch('https://react-api-b452e-default-rtdb.firebaseio.com/data.json', {
            method: "POSt",
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = respons.json()
        console.log(data)
    }

    return (
        <Fragment>
            <Inputs onAdd={addMovie} />
            <div className={classes.box}>
                <button onClick={feachDataHandler} className={classes.button}>Feach Data</button>
            </div>
            <Contain data={movie} loadstate={loading} error={error} />
        </Fragment>

    )
}

export default Box