import React from 'react'
import { useHistory, withRouter } from 'react-router'

const Header = (props) => {
    const { inputRef } = props
    const { location: { pathname } } = useHistory()
    return (
        <header>
            <img src="/images/movieLogo.png" alt="logo" />
            <span>Movie Library</span>
            {pathname !== "/create/new" && <button
                type="button"
                className="createMovieButton"
                onClick={ev => props.history.push("/create/new")}
            >
                Add Movie
            </button>}
            <input type="text" placeholder="Search Movies" ref={inputRef} />
        </header>
    )
}

export default withRouter(Header)
