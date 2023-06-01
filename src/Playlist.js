import React from 'react';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";

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

export default withAuth0(Playlist);