import React from "react";
import Card from "react-bootstrap/Card";
import './SongCard.css'

class SongCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    }
  }

  render() {
    return (
      <>
        <Card className='Artist'>
          <Card.Body>
            <Card.Img src={this.props.image}></Card.Img>
            <div className="cardBody">
              <Card.Title>Song: {this.props.title}</Card.Title>
              <Card.Title>Artist: {this.props.name}</Card.Title>
              <Card.Title>Album: {this.props.album}</Card.Title>
            </div>
            <Card.Text className="heart-icon" onClick={() => this.props.addFavorite(this.props.artist)}>&#9825;</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SongCard;
