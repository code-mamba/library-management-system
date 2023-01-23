import axios from 'axios'
import { useEffect } from 'react'
import './userProfile.css'
import { useNavigate } from 'react-router-dom'

const UserProfile = () =>{
    var isAdmin = Boolean(sessionStorage.getItem('isAdmin'))
    var userName = sessionStorage.getItem('userName')
    var userID = sessionStorage.getItem('id')
    const navigate = useNavigate()

      
    const editProfile = (id)=>{
        navigate('/edit-profile/'+id)
    }
    return(
    <>
        <div className="container d-flex justify-content-center align-items-center">
             
             <div className="usercard">

              <div className="upper">

                <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid"/>
                
              </div>

              <div className="user text-center">

                <div className="profile">

                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" className="rounded-circle" width="80"/>
                  
                </div>

              </div>


              <div className="mt-5 text-center">

                <h4 className="mb-0">{sessionStorage.getItem("userName")}</h4>
                <span className="text-muted d-block mb-2">Admin:{sessionStorage.getItem('isAdmin')}</span>

                <button onClick={()=>{editProfile(userID)}} className="btn btn-primary btn-sm follow">Edit profile</button>


                <div className="d-flex justify-content-between align-items-center mt-4 px-4">

                  <div className="stats">
                    <h6 className="mb-0">Followers</h6>
                    <span>8,797</span>

                  </div>


                  <div className="stats">
                    <h6 className="mb-0">Projects</h6>
                    <span>142</span>

                  </div>


                  <div className="stats">
                    <h6 className="mb-0">Ranks</h6>
                    <span>129</span>

                  </div>
                  
                </div>
                
              </div>
               
             </div>

           </div>
           </>
    )
}
export default UserProfile