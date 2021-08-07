// import React from 'react'
import React, { Component } from 'react';


// import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import './styles/BadgeNew.css'
import logoHeader from '../images/badge-header.svg'

class BadgeNew extends Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    handleChange = (event) =>{
        // const nextForm = this.state.form
        // nextForm[event.target.name] = event.target.value
        this.setState({
            // form: {
            //     [event.target.name]: event.target.value
            // }
            // form: nextForm
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }
    render(){
        return (
            <React.Fragment>
                {/* < NavBar /> */}
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logoHeader} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            < Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl=""
                                />
                        </div>
                        <div className="col">
                            < BadgeForm onChange={this.handleChange} formValues={ this.state.form} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew