import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import confLog from '../images/badge-header.svg'
import './styles/Badges.css'
// import NavBar from '../components/NavBar'
import BadgesList from '../components/BadgesList'

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
    constructor(props){
        super(props)
        console.log('.1')
        this.state = {
            data: [
                
              ]
        }
    }
    componentDidMount(){
        console.log('33')
        this.timeoutid = setTimeout(()=>{
            this.setState({
                data: [
                    {
                        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                        firstName: "Freda",
                        lastName: "Grady",
                        email: "Leann_Berge@gmail.com",
                        jobTitle: "Legacy Brand Director",
                        twitter: "FredaGrady22221-7573",
                        avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                      },
                      {
                        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                        firstName: "Major",
                        lastName: "Rodriguez",
                        email: "Ilene66@hotmail.com",
                        jobTitle: "Human Research Architect",
                        twitter: "ajorRodriguez61545",
                        avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                      },
                      {
                        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                        firstName: "Daphney",
                        lastName: "Torphy",
                        email: "Ron61@hotmail.com",
                        jobTitle: "National Markets Officer",
                        twitter: "DaphneyTorphy96105",
                        avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                      }
                ]
            })
        },3000)
    }

    componentDidUpdate(prevProps, prevState){
        console.log('5')
        console.log({
            prevProps: prevProps,
            prevState: prevState
        })
        console.log({
            props: this.props,
            state: this.state
        })
    }
    componentWillUnmount(){
        console.log('6 unmounts')
        clearTimeout(this.timeoutid)

    }
    render() {
        console.log('2')
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
                            < BadgesList badges={this.state.data} />
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
