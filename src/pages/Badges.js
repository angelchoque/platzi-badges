import React, { Component } from 'react'

import { Link } from 'react-router-dom'

// import  Skeleton from 'react-loading-skeleton' ;  
import Loader from '../components/Loader'
import confLog from '../images/badge-header.svg'
import './styles/Badges.css'
// import NavBar from '../components/NavBar'
import BadgesList from '../components/BadgesList'

import api from '../api'
import PageError from '../components/PageError'
class Badges extends Component {

    // state = {
        //     data: [
            //         {
    //           id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
    //           firstName: "Freda",
    //           lastName: "Grady",
    //           email: "Leann_Berge@gmail.com",
    //           jobTitle: "Legacy Brand Director",
    //           twitter: "FredaGrady22221-7573",
    //           avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
    //         },
    //         {
    //           id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
    //           firstName: "Major",
    //           lastName: "Rodriguez",
    //           email: "Ilene66@hotmail.com",
    //           jobTitle: "Human Research Architect",
    //           twitter: "ajorRodriguez61545",
    //           avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
    //         },
    //         {
    //           id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
    //           firstName: "Daphney",
    //           lastName: "Torphy",
    //           email: "Ron61@hotmail.com",
    //           jobTitle: "National Markets Officer",
    //           twitter: "DaphneyTorphy96105",
    //           avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
    //         }
    //       ]
    // }
    // constructor(props){
        //     super(props)
        //     console.log('1. Constructor()')
        //     this.state = {
            //         data: [
                
    //           ]
    //     }
    // }
    // componentDidMount(){
    //     console.log('3. ComponentDidMount()')
    //     this.timeoutid = setTimeout(()=>{
    //         this.setState({
    //             data: [
    //                 {
        //                     id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        //                     firstName: "Freda",
        //                     lastName: "Grady",
        //                     email: "Leann_Berge@gmail.com",
        //                     jobTitle: "Legacy Brand Director",
        //                     twitter: "FredaGrady22221-7573",
        //                     avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
        //                   },
        //                   {
            //                     id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            //                     firstName: "Major",
            //                     lastName: "Rodriguez",
            //                     email: "Ilene66@hotmail.com",
            //                     jobTitle: "Human Research Architect",
            //                     twitter: "ajorRodriguez61545",
            //                     avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
            //                   },
            //                   {
                //                     id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                //                     firstName: "Daphney",
                //                     lastName: "Torphy",
                //                     email: "Ron61@hotmail.com",
                //                     jobTitle: "National Markets Officer",
                //                     twitter: "DaphneyTorphy96105",
                //                     avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                //                   }
                //             ]
                //         })
                //     },3000)
                // }
                // componentDidUpdate(prevProps, prevState){
    //     console.log('5. componentDidUpdate()')
    //     console.group('5-')
    //     console.log({
    //         prevProps: prevProps,
    //         prevState: prevState
    //     })
    //     console.log({
        //         props: this.props,
        //         state: this.state
        //     })
        //     console.groupEnd()
        // }
        // componentWillUnmount(){
            //     console.log('6. componentWillUnmount()')
            //     clearTimeout(this.timeoutid)
            // }
            
            state ={
                loading: true,
                error: null,
                data: undefined
            }
            componentDidMount(){
                this.fetchData()
            }
            fetchData= async ()=>{
                this.setState({loading:true,error:null})
                try {
                    const data = await api.badges.list()
                    this.setState({loading:false,data:data})
                } catch(error){
                    this.setState({loading:false,error:error})
                }
            }
            render() {
                if (this.state.loading === true){
                    return < Loader />
                }
                if (this.state.error){
                    return < PageError error={this.state.error}/>
                }
        // console.log('2/4. Render()')
        return (
            <React.Fragment>
                {/* < NavBar />   */}
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLog} alt="" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        {/* <a href="/badges/new" className="btn btn-primary"> New Badge</a> */}
                        <Link to="/badges/new" className="btn btn-primary">New badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            < BadgesList badges={this.state.data }  />
                            {/* <ul className="list-unstyled">
                                {this.state.data.map((badge)=>{
                                    return (
                                        <li key={badge.id}><p>{badge.firstName} {badge.lastName}</p></li>
                                    )
                                })}
                            </ul> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges
