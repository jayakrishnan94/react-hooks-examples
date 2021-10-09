/* eslint-disable jsx-a11y/alt-text */
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MovieList from "./components/movieList/Index"
import MovieDetails from "./components/movieDetails/Index"
import CreateMovie from "./components/createMovie/Index"
import Header from "./components/Header"
import { useEffect, useRef } from "react";

const App = (props) => {

    const inputRef = useRef(null)

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            inputRef.current.focus()
        }
    }

    return (
        <div className="appWrapper">
            {/* <div className="toastContainer activate">
                <span className="message">
                    This is a custom toast message!
                </span>
            </div> */}
            <Router>
                <Switch>
                    <Route exact path="/">
                        <>
                            <Header inputRef={inputRef} />
                            <MovieList />
                        </>
                    </Route>
                    <Route exact path="/details/:id">
                        <Header inputRef={inputRef} />
                        <MovieDetails />
                    </Route>
                    <Route exact path="/create/new">
                        <Header inputRef={inputRef} />
                        <CreateMovie />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
