import React from 'react';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import { Card, Button } from 'react-bootstrap';
import './Playlist.css'

class Playlist extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userPlaylist: {},
			isArray: true
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('!!!!!', e.target);
		let playlistToUpdate = {
			title: e.target.title.value || this.props.playlist.title,
		};
		this.props.putPlaylist(playlistToUpdate)
	}

	//if you send the email address as query with this request it will return only the playlists that were created by the user that logged in. 
	getPlaylist = async () => {
		try {
			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const jwt = res.__raw;
				const config = {
					method: 'get',
					baseURL: process.env.REACT_APP_SERVER,
					url: `/playlist?email=${this.props.auth0.user.email}`,
					headers: { "Authorization": `Bearer ${jwt}` }
				}
				const results = await axios(config);
				console.log('result', results.data);
				let isArray = Array.isArray(results.data);
				this.setState({
					userPlaylist: results.data,
					isArray: isArray
				});
			}
		} catch (err) {
			console.log("nay nay", err.response);
		}
	}

	deletePlaylist = async () => {
		if (this.props.auth0.isAuthenticated) {
			const res = await this.props.auth0.getIdTokenClaims();
			const jwt = res.__raw;
			const config = {
				method: 'delete',
				baseURL: process.env.REACT_APP_SERVER,
				url: `/playlist/${this.state.userPlaylist['_id']}`,
				headers: { "Authorization": `Bearer ${jwt}` }
			}
			const results = await axios(config);
			console.log('result', results.data);
			this.setState({
				userPlaylist: {},
			});
		}
	}

	putPlaylist = async (playlistToUpdate) => {
		try {
			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const jwt = res.__raw;
				const config = {
					method: 'put',
					baseURL: process.env.REACT_APP_SERVER,
					url: '/playlist',
					headers: { "Authorization": `Bearer ${jwt}` },
					data: {
						title: playlistToUpdate.title,
					},
				};
				const response = await axios(config);
				console.log(response.data);
			}
		} catch (err) {
			console.log("Error updating playlist:", err.response);
		}
	}

	deleteSong = async (index) => {
		const newPlaylist = this.state.userPlaylist;
		newPlaylist.songs.splice(index, 1);
		this.setState({ userPlaylist: newPlaylist });
		console.log('new', newPlaylist);
		try {
			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const jwt = res.__raw;
				const config = {
					method: 'put',
					baseURL: process.env.REACT_APP_SERVER,
					url: `/playlist/${newPlaylist['_id']}`,
					headers: { "Authorization": `Bearer ${jwt}` },
					data: {
						...newPlaylist
					},
				};

				const response = await axios(config);
				console.log(response.data);
			}
		} catch (err) {
			console.log("Error updating playlist:", err.response);
		}
	}

	componentDidMount() {
		this.getPlaylist();
	}

	render() {
		return (
			<>
				<main className='playlistMain'>
					<h1>Welcome, {this.props.auth0?.user?.given_name || 'friend'}!</h1>
					<h1>Your Favorite Songs</h1>
					{this.state.userPlaylist.title &&
						<Card className='playlistCard'>
							<Card.Title className='playlistTitle'>{this.state.userPlaylist.title}</Card.Title>
							<Card.Text className='playlistCardText'>
								{this.state.userPlaylist.songs.map((song, index) => (
									<li className='playlistLI'>
										{song.title} by {song.name}
										<Button
											className="playlistTrashBtn"
											variant="dark"
											onClick={() => this.deleteSong(index)}
										>🗑️</Button>
									</li>
								))}
							</Card.Text>
							<Button
								className="playlistDeleteBtn"
								variant="danger"
								onClick={() => this.deletePlaylist()}
							>Delete Playlist</Button>
						</Card>
					}
				</main>
			</>
		)
	}
}

export default withAuth0(Playlist);
