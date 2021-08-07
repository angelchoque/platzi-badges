import React, { Component } from 'react'

import './styles/BadgesList.css'

export class BadgesList extends Component {
    render() {
        return (
            <ul className="list-unstyled">
                { this.props.badges.map((badge)=>{
                    return (
                        <li className="bg-white card-item mb-4" key={badge.id}>
                            <figure className="my-2 mx-4">
                                <img src={badge.avatarUrl} alt="Profile" />
                            </figure>
                            <div>
                            <p>{badge.firstName} {badge.lastName}</p>
                            <p className="social-media">@{badge.twitter}</p>
                            <p>{badge.jobTitle}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList
