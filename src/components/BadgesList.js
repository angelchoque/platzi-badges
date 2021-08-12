import React from 'react'
import {Link} from 'react-router-dom'
import './styles/BadgesList.css'
import Gravatar from './Gravatar'

function deleteSpecialCaracters(text) {
  // Delete all special caracters, except "ñ"
  return text
         .normalize('NFD')
         .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
         .normalize();
}
function useSearchBadges(badges){
 const [query, setQuery]= React.useState('')

 // const fiteredBadges = badges.filter(badge=>{
 //  return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
 // })
 const [ filteredBadges,setFilteredBadges] = React.useState(badges)
  // React.useMemo(()=>{
  //   const result = badges.filter(badge=>{
  //   return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
  //   })
  //   setFilteredBadges(result)
  // }, [badges,query])
  React.useMemo(()=>{
    const result = badges.filter(badge=>{
      const nameClean=deleteSpecialCaracters(
        `${badge.firstName} ${badge.lastName}`)
        .toLowerCase();
      const queryClean=deleteSpecialCaracters(query).toLowerCase();
      return nameClean.includes(queryClean);
    });
    setFilteredBadges(result);
  }, [badges, query]);

 return {query,setQuery,filteredBadges}
}

function BadgesList (props) {
 const badges = props.badges
 const {query,setQuery,filteredBadges} = useSearchBadges(badges)

 if (filteredBadges.length === 0){
     return (
         <div>
             <div className="form-group">
       <label htmlFor="">Filter badges</label>
       <input type="text" className="form-control"
       value={query}
       onChange={(e)=>{
        setQuery(e.target.value)
       }} />
      </div>
             <h3>
                 no badges were found
             </h3>
             <Link to='/badges/new' className="btn btn-primary">Create New Badge</Link>
         </div>
     )
 }
 const badgesList =  [...filteredBadges].reverse();
 return (
     <div className="BadgesList">
      <div className="form-group">
       <label htmlFor="">Filter badges</label>
       <input type="text" className="form-control"
       value={query}
       onChange={(e)=>{
        setQuery(e.target.value)
       }} />
      </div>
      <ul className="list-unstyled">
         {/* { this.props.badges.map((badge)=>{ */}
         { badgesList.map((badge)=>{
             return (
                 <li  key={badge.id}>
                     <Link className="bg-white card-item mb-4" to={`/badges/${badge.id}`}>
                         <figure className="my-2 mx-4">
                             {/* <img src={badge.avatarUrl} alt="Profile" /> */}
                             < Gravatar email={badge.email}
                             alt={`${badge.firstName} ${badge.lastName}`}/>
                         </figure>
                         <div>
                             <p>{badge.firstName} {badge.lastName}</p>
                             <p className="social-media">@{badge.twitter}</p>
                             <p>{badge.jobTitle}</p>
                         </div>
                     </Link>
                 </li>
             )
         })}
     </ul>
     </div>
 )
}

export default BadgesList
