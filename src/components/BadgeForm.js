import React, { Component } from 'react'

class BadgeForm extends Component{
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     jobTitle: '',
    //     twitter: ''
    //   } // definir para que no salga un warning
    // state = {
    //     // jobTitle: 'designer'
    // }
    // handleChange = (event) => {
    //     // console.log({
    //     //     name: event.target.name,
    //     //     value: event.target.value })
    //     this.setState({
    //         // firstName: event.target.value
    //         [event.target.name]: event.target.value
    //     })
    // }
    handleClick = (event) => {
        console.log('btn was lcik')
    }
    handleSubmit = (event) => {
        event.preventDefault() // detiene el submit
        console.log('hya ')
        console.log(this.state)
    }
    render(){
        return (
            <div className="">
                <h1>New Attendant</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        {/* leer -> statate //// escribr set */}
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName" 
                            placeholder="Name" 
                            value={this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" placeholder="lastName" value={this.props.formValues.lastName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" placeholder="email@example.com" value={this.props.formValues.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" placeholder="@user" value={this.props.formValues.twitter} />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary mt-2">save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm

// Levantar el estado, pasar los datos como props a los componentes
// se le pone en el lugar mas cercano a compartir