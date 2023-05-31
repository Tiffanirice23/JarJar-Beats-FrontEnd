import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AboutUs from './AboutUs';
import Search from './Search';
import Playlist from './Playlist';
import Artist from './Artist';


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">

        </header>

        <Router>
          <Routes>

            <Route
              //  is the homepage
              exact path="/"
              //the homepage will render bestbooks js
              element={<Search />}
            > </Route>

            <Route
              //  is the homepage
              path="/artist"
              //the homepage will render bestbooks js
              element={<Artist />}
            > </Route>

            <Route
              //  is the homepage
              path="/playlist"
              //the homepage will render bestbooks js
              element={<Playlist />}
            > </Route>

            <Route
              //  is the homepage
              path="/about-us"
              //the homepage will render bestbooks js
              element={<AboutUs />}
            > </Route>

          </Routes>

        </Router>

      </div>
    );
  }
}


export default App;
