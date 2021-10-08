import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MovieCard from './MovieCard'

const Index = () => {

    const [movieList, setMoviesList] = useState([])

    const history = useHistory()

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            alert("cleaning up")
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleMovieClick(document.activeElement.tabIndex)
        }
    }
    
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
            <ul className="instructions">
                <li>Use <code>tab</code> to cycle through movies </li>
                <li>Use <code>ctrl+Enter</code> to go the selected movie detail page  </li>
            </ul>
            <section className="movieList">
                {
                    movieList.map((item, idx) => <MovieCard {...item} key={idx} handleMovieClick={handleMovieClick} />)
                }
            </section>
        </main>
    )
}

export default Index
