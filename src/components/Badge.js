import React from 'react'

import './styles/badge.css'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {

    render(){
      // const {
      //   firstName,
      //   lastName,
      //   avatarUrl,
      //   jobTitle,
      //   twitter
      //   } = this.props
        return (
                <div className="badge">
                    <div className="badge_header">
                        <img src={confLogo} alt="logo" />
                    </div>

                    <div className="badge_section-name">
                      <img className="badge_avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="avatar" />
                      <h1> {this.props.firstName} <br/> {this.props.lastName}</h1>
                    </div>
                    <div className="badge_section-info">
                      <p>{this.props.jobTitle}</p>
                      <p>@{this.props.twitter}</p>
                    </div>
                    <div className="badge_footer">
                      #Platziconf
                    </div>
                </div>
        )
    }
}

export default Badge