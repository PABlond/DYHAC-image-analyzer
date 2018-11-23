import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'

class Footer extends Component {
    render = () =>(
            <p className="position-absolute text-center text-light w-100" style={{bottom: 0}}>
            Made with ❤ by <a className="text-danger bg-light" href="https://github.com/PABlond">PABlond</a></p>
    )
}


class AppRoutes extends Component {
    state = {}
    render() {
        console.log(this.props)
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default AppRoutes;