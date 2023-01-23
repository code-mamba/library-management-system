import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import './editProfile.css'

const EditProfile = () =>{
    const {id} = useParams 
    const[profile,setProfile] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/users/'+id)
        .then((res)=>{setProfile (res.data)})
        console.log(profile)
    },[])
    return(
        <>
         <form className="card-body cardbody-color p-lg-5" onSubmit={addUser}>
  
  
  <div className="mb-3">
    <label htmlFor="Username">User Name:</label>
    <input type="text" className="form-control" id="Username"
      placeholder="Enter Your User Name" value={userName} onChange={e=>{setuserName(e.target.value)}} onClick = {e=>{e.focus(setCredErr(null),seterrMsg(null))}}/>
  </div>
  <div className="mb-3">
      <label htmlFor="Usermail">User Mail:</label>
      <input type="text" className = 'form-control' id ="Usermail" placeholder="Enter Your Mail"
      value={userEmail} onClick={e=>{e.focus(setCredErr(null),seterrMsg(null))}} onChange={(e)=>{setuserEmail(e.target.value)}} ></input>
  </div>
  <div className="mb-3">
    <label htmlFor="password">Create password:</label>
    <input type={show?"text":"password"} className="form-control" id="password" placeholder="Enter Your password"value={userPassword}
    onChange={(e)=>{setuserPassword(e.target.value)}} onClick={e=>{e.focus(setCredErr(null),seterrMsg(null))}} />
    <p onClick={()=>setShow(prestate => !prestate)} >  <i  className="fa fa-eye fa-fw" id="togglePassword" aria-hidden="true"></i> </p> 
  </div>
  {errMsg&& <p style={{color:"red"}}>{errMsg}</p>}
  {credErr&&<p style={{color: "red"}}>{credErr}</p>}
  <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Register</button></div>
  <ul><li>Minimum eight characters, at least one letter, one number and one special character:</li></ul>
  
</form>
        </>
    )
}
export default EditProfile