import React from "react";
import Card from "react-bootstrap/Card";
import './SongCard.css'
import Alert from 'react-bootstrap/Alert';


class SongCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      showAlert: false
    }
  }

  handleHeartClick = () => {
    this.setState({ showAlert: true});
  }
  render() {
    return (
      <>
        <Card className='Artist'>
          <Card.Body>
            <Card.Img src={this.props.image}></Card.Img>
            <div className="cardBody">
            <Card.Text 
              className="heart-icon" 
              onClick={() => this.props.addFavorite(this.props.artist)}
              >&#9825;
            </Card.Text>
              <Card.Title>Song: {this.props.title}</Card.Title>
              <Card.Title>Artist: {this.props.name}</Card.Title>
              <Card.Title>Album: {this.props.album}</Card.Title>
            </div>
          </Card.Body>
        </Card>
        {this.state.showAlert && (
          <Alert variant="primary">
            This is a primary alert—check it out!
          </Alert>
        )}
      </>
    )
  }
}

export default SongCard;
