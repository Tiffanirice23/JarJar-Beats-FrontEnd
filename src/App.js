import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Header'
import AboutUs from './AboutUs';
import Search from './Search';
import Playlist from './Playlist';
import Artist from './Artist';
import Footer from './Footer';

class App extends React.Component {

  render() {

    return (
      <div className="App">



        <Router>
        <Header/>
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
<Footer/>

        </Router>

      </div>
    );
  }
}


export default App;
