import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MovieCard from './MovieCard'

const Index = () => {

    const [movieList, setMoviesList] = useState([])

    const history = useHistory()

    useEffect(() => {
        fetchMoviesData()
    }, [])

    const fetchMoviesData = async () => {
        try {
            const response = await (await fetch(process.env.REACT_APP_BASE_URL + '/movies')).json()
            setMoviesList(response)
        } catch (error) {
            console.error("Fetch movie list error:--", error)
        }
    }

    const handleMovieClick = (id) => history.push(`/details/${id}`)
    
    return (
        <main>
            <section className="movieList">
                {
                    movieList.map((item, idx) => <MovieCard {...item} key={idx} handleMovieClick={handleMovieClick} />)
                }
            </section>
        </main>
    )
}

export default Index
