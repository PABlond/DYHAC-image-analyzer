import React, { Component } from 'react'
import { connect } from 'react-redux'
import constants from './../../_utils/const'

class GameFinish extends Component {
    componentDidMount = () => this.props.endGame()

    render = () => {
        const { reset, user } = this.props;
        const resultTime = {
            min: Number(user.finishAt ? user.finishAt.split(':')[0] : '00'),
            sec: Number(user.finishAt ? user.finishAt.split(':')[1] : '00')
        };
        return (
            <div className="d-flex justify-content-center align-items-center w-100 bg-primary" style={{ height: "100vh" }}>
                <div className="text-center bg-light p-5 rounded">
                    <h2 className="text-danger pb-2">Game over ...</h2>
                    <p className="pb-2">Time: <span className="text-danger">{resultTime.min} min and {resultTime.sec} seconds</span></p>
                    <p className="btn btn-primary btn-block p-2" onClick={reset}>Reset</p>
                </div>
            </div>
        )
    }
}

const { reset, end } = constants,

    mapStateToProps = state => ({ ...state }),

    mapDispatchToProps = dispatch => ({
        reset: () => dispatch({ type: reset }),
        endGame: () => dispatch({ type: end })
    });

export default connect(mapStateToProps, mapDispatchToProps)(GameFinish)