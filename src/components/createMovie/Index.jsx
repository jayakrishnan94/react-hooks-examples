import React, { useReducer, useState } from 'react'

const MultiMediaData = () => {
    return (
        <>
            <img src="/images/no-image-icon.png" alt="" />
            <video width="320" height="240" controls>
                <source src="/images/Timelapse of a Cold Winter Day.mp4" type="video/mp4" />
                <source src="/images/Timelapse of a Cold Winter Day.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}

const movieActions = {
    removeMovie: "removeMovie",
    addMovie: "addMovie"
}

const reducer = (state, action) => {
    console.log(`state`, { state, action })
    switch (action.type) {
        case movieActions.addMovie:
            return [...state, action.payload]
        case movieActions.removeMovie:
            console.log(`object 1`, state.splice(action.payload.id, 1))
            console.log(`object 2`, state)
            return [...state]
        default:
            return state
    }
}

const Index = () => {

    const initialState = {
        "title": "",
        "language": "",
        "rating": 0,
        "genre": "",
        "poster": "",
        "movie": "",
        "plot": ""
    }
    const [movie, setMovie] = useState(initialState)
    const [newMoviesList, dispatch] = useReducer(reducer, [])

    const handleChane = (ev) => {
        const { name, value } = ev.target;
        setMovie({
            ...movie,
            [name]: value
        })
    }

    return (
        <section className="createMovieWrapper">
            <div className="innerWrapper">
                <div className="formWrapper">
                    <form action="">
                        <h1>Create Movie</h1>
                        <MultiMediaData />
                        <div className="field">
                            <input type="text" placeholder="Poster Link here" name="poster" value={movie.poster} onChange={handleChane} />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Movie Link here" name="movie" value={movie.movie} onChange={handleChane} />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Title" name="title" value={movie.title} onChange={handleChane} />
                        </div>
                        <div className="field">
                            <input type="text" placeholder="Language" name="language" value={movie.language} onChange={handleChane} />
                        </div>
                        <div className="field">
                            <select id="" name="genre" value={movie.genre} onChange={handleChane}>
                                <option value="Select Genre">Select Genre</option>
                            </select>
                        </div>
                        <div className="field">
                            <textarea id="" cols="60" rows="6" name="plot" value={movie.plot} onChange={handleChane}>
                            </textarea>
                        </div>
                        <div className="field">
                            <button
                                type="button"
                                onClick={() => dispatch({ type: movieActions.addMovie, payload: movie })}
                            >Add Movie</button>
                        </div>
                    </form>
                </div>
                <div className="previewList">
                    {
                        newMoviesList.map((item, idx) => {
                            return (
                                <div key={idx} className="movie">
                                    <span
                                        className="removeMovie"
                                        onClick={() => dispatch({ type: movieActions.removeMovie, payload: idx })}
                                    >
                                        &#10006;
                                    </span>
                                    <img src={item.poster} alt={item.title} />
                                    <span>{item.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Index
