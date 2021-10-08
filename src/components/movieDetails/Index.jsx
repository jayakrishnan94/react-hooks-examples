import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const Index = () => {
    const { id } = useParams()
    const history = useHistory()

    const [movie, setMovie] = useState(null)
    const [moviesList, setMoviesList] = useState(null)

    const { title, language, genre, rating, poster, plot } = (movie || {});

    useEffect(() => {
        fetchMovie()
        fetchMoviesData()
    }, [id])

    const fetchMovie = async () => {
        try {
            const response = await (await fetch(process.env.REACT_APP_BASE_URL + `/movies/${id}`)).json()
            setMovie(response)
        } catch (error) {
            console.error("Fetch movie list error:--", error)
        }
    }

    const fetchMoviesData = async () => {
        try {
            const response = await (await fetch(process.env.REACT_APP_BASE_URL + '/movies')).json()
            setMoviesList(response.filter(x => x.id !== Number(id)))
        } catch (error) {
            console.error("Fetch movie list error:--", error)
        }
    }

    const handleMovieClick = (id) => history.push(`/details/${id}`)

    return (
        <section className="movieDetailWrapper">
            {
                !movie
                    ? <h1>Loading...</h1>
                    : <div className="innerWrapper">
                        <div className="poster">
                            <img src={poster} alt="" />
                        </div>
                        <div className="movieDetails">
                            <h1 className="title">{title}</h1>
                            <span className="rating"> Raing: {rating}</span>
                            <span className="language"> Language: {language}</span>
                            <span className="genre"> Genre: {genre}</span>
                            <p className="plot">{plot}</p>
                            <button>Watch Movie Now</button>
                        </div>
                    </div>
            }
            <div className="relatedMovies">
                <h3>Related Movies</h3>
                <div className="relatedList">
                    {
                        moviesList
                            ? moviesList.map((item, id) => {
                                return (
                                    <React.Fragment>
                                        <div className="poster" onClick={() => handleMovieClick(item.id)}>
                                            <img src={item.poster} alt={item.title} />
                                            {item.title}
                                        </div>
                                    </React.Fragment>
                                )
                            })
                            : <h1>Loading...</h1>
                    }
                </div>
            </div>
        </section>
    )
}

export default Index
