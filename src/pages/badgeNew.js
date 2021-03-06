// import React from 'react'
import React, { Component } from 'react';


// import NavBar from '../components/NavBar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import './styles/BadgeNew.css'
import logoHeader from '../images/platziconf-logo.svg'
import Loader from '../components/Loader'
import api from '../api'


class BadgeNew extends Component {
    state = {
        loading: false,
        error: null,
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
    handleSubmit= async event=>{
        event.preventDefault()
        this.setState({loading:true,error:null})

        try {
            await api.badges.create(this.state.form)
            this.setState({loading:false})

            this.props.history.push('/badges')

        } catch (error){
            this.setState({loading:false,error:error})
        }
    }
    render(){
        if (this.state.loading){
            return < Loader />
        }
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
                                firstName={this.state.form.firstName || 'Your Name'} 
                                lastName={this.state.form.lastName || 'here'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'Job Title'}
                                email={this.state.form.email || 'email'}
                                avatarUrl=""
                                />
                        </div>
                        <div className="col">
                <h1>New Attendant</h1>

                            < BadgeForm 
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange} 
                                formValues={this.state.form} 
                                error={this.state.error}
                                />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew