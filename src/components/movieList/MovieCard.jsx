import React from 'react'

const MovieCard = (props) => {
    const { title, language, genre, poster, plot } = props;
    return (
        <div class="movieCard">
            <div class="innerWrapper">
                <img src={poster} alt={title} />
                <span>{title}</span>
                <span>Language: {language}</span>
                <span>Genre: {genre}</span>
                <span>Plot: {plot}</span>
            </div>
        </div>
    )
}

export default MovieCard
