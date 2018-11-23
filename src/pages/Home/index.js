import React, { Component } from 'react';
import { connect } from 'react-redux'
import GameFinish from './../GameFinish'
import Intro from './../Intro'
import Game from './../Game'

class Home extends Component {

  render = () => {
    const { score, playing } = this.props.user;
    if (!playing) return <Intro />
    return score < 10
      ? <Game />
      : <GameFinish />
  }
}

const mapStateToProps = state => ({ ...state }),
  mapDispatchToProps = dispatch => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Home);