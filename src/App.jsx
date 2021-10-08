/* eslint-disable jsx-a11y/alt-text */
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MovieList from "./components/movieList/Index"
import MovieDetails from "./components/movieDetails/Index"
import CreateMovie from "./components/createMovie/Index"

const App = () => {
    return (
        <div class="appWrapper">
            {/* <div class="toastContainer activate">
                <span class="message">
                    This is a custom toast message!
                </span>
            </div> */}
            <Router>
                <header>
                    <img src="/images/movieLogo.png" />
                    <span>Movie Library</span>
                    <input type="text" placeholder="Search Movies" />
                </header>
                <Switch>
                    <Route exact path="/">
                        <MovieList />
                    </Route>
                    <Route exact path="/details/:id">
                        <MovieDetails />
                    </Route>
                    <Route exact path="/create/new">
                        <CreateMovie />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
