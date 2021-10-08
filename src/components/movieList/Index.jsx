import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const Index = () => {
    const [movieList, setMoviesList] = useState([])
    useEffect(() => {
        setMovieData()
    }, [])
    const setMovieData = async () => {
        try {
            const response = await (await fetch(process.env.REACT_APP_BASE_URL + '/movies')).json()
            setMoviesList(response)
        } catch (error) {
            console.error("Fetch movie list error:--", error)
        }
    }
    return (
        <main>
            <section class="movieList">
                {
                    movieList.map((item, idx) => <MovieCard {...item} key={idx} />)
                }
            </section>
        </main>
    )
}

export default Index
