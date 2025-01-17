import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar className='footer' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>&copy; Music Variant Project</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
