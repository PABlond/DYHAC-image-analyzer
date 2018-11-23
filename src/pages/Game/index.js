import React, { Component } from 'react'
import onCameraStart from './../../_utils/onCameraStart'
import { connect } from 'react-redux'

navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia);
  
class Game extends Component {
    componentDidMount = () =>
        navigator.getUserMedia({
            audio: false,
            video: { width: 1280, height: 720 }
        }, stream => {
            const { video, canvas } = this.refs;
            video.srcObject = stream;
            onCameraStart(canvas);
        }, err => console.log(err))

    render = () => {
        const { score } = this.props.user;
        return (
            <div className="d-flex justify-content-center flex-column align-items-center w-100 bg-primary" style={{ height: "100vh" }}>
                <div className="d-flex justify-content-center mb-5">
                    <video width="768" height="576" autoPlay id="video" className="rounded" style={{border: "10px solid white"}} ref="video" src='https://127.0.0.1'></video>
                    <canvas id="canvas" ref="canvas" className="position-absolute" width="768" height="576"></canvas>
                </div>
                <h3 className="text-center bg-light p-5 rounded">Score: <span className="text-danger">{score} / 10</span></h3>
            </div>
        )

    }
}

const mapStateToProps = state => ({ ...state }),
    mapDispatchToProps = dispatch => { };

export default connect(mapStateToProps, mapDispatchToProps)(Game);