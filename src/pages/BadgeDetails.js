import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './styles/BadgeDetails.css'
import ConfLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/Loader'
import PageError from '../components/PageError'
import api from '../api'
import Badge from '../components/Badge'
// import Modal from '../components/Modal'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
export class BadgeDetails extends Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData = async ()=>{
        this.setState({loading: true, error: null})
        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading: false, data: data})
        }catch(error){
            this.setState({loading: false, error: error})
        }
    }
    handleOpenModal = e=>{
      this.setState({modalIsOpen: true})
    }
    handleCloseModal = e=>{
      this.setState({modalIsOpen: false})
    }
    HandleDeleteBadge = async e =>{
      this.setState={loading:true,error:null}
      try{
        await api.badges.remove(this.props.match.params.badgeId)
        this.setState={loading:false}
        this.props.history.push('/badges')
      }catch(error){
        this.setState={loading:false,error:error}
      }
    }
    render() {
        if (this.state.loading){
            return < PageLoading />
        }
        if (this.state.error){
            return < PageError error={this.state.error}/>
        }
        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={ConfLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name ">
                                <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            < Badge 
                                firstName={this.state.data.firstName} 
                                lastName={this.state.data.lastName}
                                email={this.state.data.email}
                                twitter={this.state.data.twitter}
                                jobTitle={this.state.data.jobTitle}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${this.state.data.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={this.handleOpenModal} className='btn btn-danger'>Delete</button>
                                <DeleteBadgeModal isOpen={this.state.modalIsOpen} onClose={this.handleCloseModal} 
                                onDeleteBadge={this.HandleDeleteBadge} / >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetails
