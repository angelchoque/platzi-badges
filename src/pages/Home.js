import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import './styles/Home.css'
import platziconf from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'
export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Home">
                    <div>
                        <img src={platziconf} alt="Platziconf" />
                        <h2>Print your Badges</h2>
                        <p>The easiest way to manage your Conference</p>
                        <Link to="/Badges" className="btn btn-primary">Start Now</Link>
                    </div>
                    <figure>
                        <img src={astronauts} alt="" />
                    </figure>
                </div>
            </React.Fragment>
        )
    }
}

export default Home
