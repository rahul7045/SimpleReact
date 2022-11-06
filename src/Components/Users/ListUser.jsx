import React from 'react'
import { ReactDOM } from 'react'

 const ListUser = (props) => {
   
  return (     
        <div className="card" style={{width: 18 + 'rem', margin: "auto" , marginTop:5+"px"}}>
        <ul>
           {props.users.map((user)=>(
            <li key={user.id}>
                <div className="card-body">
                    <span className="card-title">{user.name}</span>
                    <span className="card-text"> {user.age}</span>
                    <button key={user.id} type="button" className="btn btn-danger float-end" onClick= {()=> props.onDelete(user.id)} >Delete</button>
                </div>  
            </li>
           ))}  
        </ul>    
        
        </div>
  )
}

export default ListUser
