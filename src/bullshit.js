import React from "react";
import Card from "react-bootstrap/Card";
// import Typography from "react-bootstrap/Typography"

class Songcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  render() {
    return (
      <>
        <Card className='Artist' style={{ width: '75%' }}>
          <Card.Body>
            <Card.Img src={this.state.image}></Card.Img>
            <Card.Title>{this.state.artist}</Card.Title>
            <Card.Text>Song: {this.state.title}</Card.Text>
            <Card.Text>Album: {this.state.album}</Card.Text>
          </Card.Body>
        </Card>
      </>

    )
  }
}

export default Songcard;