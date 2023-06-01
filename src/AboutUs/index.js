import React from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import './index.css';

class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalInfo: {
                title: '',
                body: '',
            },
        }
    }

    renderModal(info) {
        this.setState({
            showModal: true,
            modalInfo: {
                title: info.title,
                body: info.body,
            }
        })
    }

    render() {
        return (
            <>
            <h1> Click on an Image & get to know us!</h1>
                <div className='AboutContainer'>
                    <img
                        src="./images/ashley.jpeg"
                        alt="Pic of Ashley"
                        onClick={() => this.renderModal({
                            title: 'My name is Ashley',
                            body: 'This is my text body for Ashley',
                        })}
                        className="profileImg"
                    />
                    <img
                        src="./images/anton.jpeg"
                        alt="Pic of Anthony"
                        onClick={() => this.renderModal({
                            title: 'My name is Anthony',
                            body: 'This is my text body for Anthony',
                        })}
                        className="profileImg"
                    />
                    <img
                        src="./images/tiffani.jpeg"
                        alt="Pic of Tiff"
                        onClick={() => this.renderModal({
                            title: 'My name is Tiffani',
                            body: 'This is my text body for Tiffani',
                        })}
                        className="profileImg"
                    />

                        <img
                            src="./images/jared.jpg"
                            alt="Pic of Jared"
                            onClick={() => this.renderModal({
                                title: 'My name is Jared',
                                body: 'This is my text body for Andrew',
                            })}
                            className="profileImg"
                            />

                    <img
                        src="./images/andrew.jpeg"
                        alt="Pic of Andrew"
                        onClick={() => this.renderModal({
                            title: 'My name is Andrew',
                            body: 'This is my text body for Andrew',
                        })}
                        className="profileImg"
                    />
                    <img
                        src="./images/dan.jpeg"
                        alt="Pic of Dan"
                        onClick={() => this.renderModal({
                            title: 'My name is Dan',
                            body: 'This is my text body for Dan',
                        })}
                        className="profileImg"
                    />

                </div>

                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title>{this.state.modalInfo.title}</Modal.Title>
                    </Modal.Header>
                    <div class="modal-body">
                        <p>{this.state.modalInfo.body}</p>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-default"
                            data-dismiss="modal"
                            onClick={() => this.setState({ showModal: false })}
                        >Close</button>
                    </div>
                </Modal >
            </>
        );
    }
}

export default AboutUs;
