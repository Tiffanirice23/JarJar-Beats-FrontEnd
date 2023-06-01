import React from 'react';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
// import search from './search.js'

class Playlist extends React.Component {
  //if you send the email address as query with this request it will return only the playlists that were created by the user that logged in. 
  getPlaylist = async () => {
    try {
      if (this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/playlist',
          headers: { "Authorization": `Bearer ${jwt}` }

        }
        const results = await axios(config);
        console.log(results.data);
      }
    } catch (err) {
      console.log("nay nay", err.response);
    }
  }
  componentDidMount() {
    this.getPlaylist();
  }
  render() {
    console.log(this.props.auth0.user);
    return (
      <>
        <p> Playlist </p>
      </>
    )
  }
}

{/* <h2>Favorites</h2>
{
  this.state.favorites.map((favorite, idx) => (
    <div key={idx}>
      <h3>{favorite.title}</h3>
      <h4>{favorite.album}</h4>
      <img src={favorite.image} />
    </div>
  ))
}

render() {
  const { favoriteData } = this.props;

  class Playlist extends React.Component {
    handleFavorite = (data) => {
      // Call the onFavorite function passed from the parent and pass the data
      this.props.onFavorite(data);
    };

  return (
    <div>
      <h2>Child Component</h2>
      {favoriteData.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button onClick={() => this.handleFavorite(item)}>
            {favoriteData.some((favorite) => favorite.id === item.id) ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  );
} */}
// }

export default withAuth0(Playlist);