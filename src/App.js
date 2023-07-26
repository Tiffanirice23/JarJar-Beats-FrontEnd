import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Header'
import AboutUs from './AboutUs/index';
import Search from './Search';
import Playlist from './Playlist';
import Artist from './Artist';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import Profile from './Profile';

class App extends React.Component {
  render() {
    return (
      <>
        {/* {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <Profile /> : <h2>Please login</h2>} */}
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={this.props.auth0.isAuthenticated ? <Search /> : 
              <main>
                <p id="loading"> Loading... Please Login to View</p>
                <img id='record' src='/images/JarJarRecord.png' alt="JarJar Record" />
              </main>}
            > </Route>
            <Route
              path="/artist"
              element={<Artist />}
            > </Route>
            <Route
              path="/playlist"
              element={<Playlist />}
            > </Route>
            <Route
              path="/about-us"
              element={<AboutUs />}
            > </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
