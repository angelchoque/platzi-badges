import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'
import './styles/BadgesList.css'


export class Loader extends Component {
    render() {
        return (
            <li className="bg-white card-item mb-4" >
                <figure className="my-2 mx-4">
                    <img src={<Skeleton />}alt="Profile" />
                </figure>
                <div>
                <p>{<Skeleton />} {<Skeleton />}</p>
                <p className="social-media">{<Skeleton />}</p>
                <p>{<Skeleton />}</p>
                </div>
            </li>
        )
    }
}

export default Loader
