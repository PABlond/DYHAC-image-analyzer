import React, { Component } from 'react'
import { connect } from 'react-redux'
import constants from './../../_utils/const'

class Intro extends Component {
    render = () => {
        const {start} = this.props;
        return (
            <div className="d-flex justify-content-center align-items-center w-100 bg-primary" style={{ height: "100vh" }}>
                <div className="text-center bg-light p-5 rounded">
                    <h2 className="text-danger pb-2">Welcome</h2>
                    <p className="pb-2">You will have to center your face (eyes or mouth) with the red frame<br />
                    Do not forget, the time is runnnig out !</p>
                    <p className="btn btn-primary p-2 btn-block" onClick={start}>Play</p>
                </div>
            </div>
        )
    }    
}

const { start } = constants,

    mapStateToProps = state => ({ ...state }),

    mapDispatchToProps = dispatch => ({
        start: () => dispatch({ type: start })
    });

export default connect(mapStateToProps, mapDispatchToProps)(Intro)