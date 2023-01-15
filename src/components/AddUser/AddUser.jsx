import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css"
import axios from "axios";

const AddUser = () => {
    const [userName,setuserName]=useState('');
    const [userEmail,setuserEmail]=useState('');
    const [userPassword,setuserPassword]=useState('');
    const [errMsg,seterrMsg]=useState(null);
    const navigate=useNavigate();
    const validateForm=(email,password)=>{
        if(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)&&password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
          return false
        }else{
          return true
        };
      }
    const addUser=(e)=>{
        e.preventDefault();
        if(validateForm(userEmail,userPassword)){
            seterrMsg("Invalid Login Credintials");
        }
        else{
            const user={userName,userEmail,userPassword,"isAdmin":false};
            axios.post('http://localhost:8000/users',user).then((res)=>{navigate('/');}).catch((err)=>{console.log(err);})
            // fetch('http://localhost:8000/users',{
            //     method:'POST',
            //     headers:{'Content-Type':'application/json'},
            //     body:JSON.stringify(user)
            // }).then((res)=>{navigate('/');}).catch((err)=>{console.log(err);})
        }
    }
    return ( 
      <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Register Form</h2>
          <div className="text-center mb-5 text-dark">LMS</div>
          <div className="card my-5">
  
            <form className="card-body cardbody-color p-lg-5" onSubmit={addUser}>
  
  
              <div className="mb-3">
                <input type="text" className="form-control" id="Username"
                  placeholder="Enter Your User Name" value={userName} onChange={e=>{setuserName(e.target.value)}}/>
              </div>
              <div className="mb-3">
                  <input type="text" className = 'form-control' id ="Usermail" placeholder="Enter Your Mail"
                  value={userEmail} onChange={(e)=>{setuserEmail(e.target.value)}} ></input>
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="password" placeholder="Enter Your password"value={userPassword}
                onChange={(e)=>{setuserPassword(e.target.value)}}/>
              </div>
              {errMsg&& <p style={{color:"red"}}>{errMsg}</p>}
              <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Register</button></div>
              
            </form>
          </div>
  
        </div>
      </div>
    </div>


      //   <div className="Signin">
      //   <form className="sign-in-container" onSubmit={addUser}>

      //     <div className="input-container">
      //       <label htmlFor="name">Name</label>
      //       <input type="text" required value ={userName} onChange = {(e)=>{setuserName(e.target.value)}}></input>
      //       <label  htmlFor="email">E-mail</label>
      //       <input type="text"  required value={userEmail} onChange={(e)=>setuserEmail(e.target.value)}></input>
      //       <label htmlFor="password">Password</label>
      //       <input type="password" required value={userPassword} onChange={(e)=>setuserPassword(e.target.value)}></input>
      //       {errMsg&& <p>{errMsg}</p>}
      //       </div>
      //       <button className="AddBookBut">Sign Up</button>

          

      //   </form>
      //  </div>

        // <div className="add-user">
        //     <form onSubmit={addUser}>
        //         <label htmlFor="Name">Name</label>
        //         <input type="text" name="" id=""required value={userName} onChange={(e)=>{ setuserName(e.target.value)}}/>
        //         <label htmlFor="email">E-mail</label>
        //         <input type="email" name="" id=""required value={userEmail} onChange={(e)=>{ setuserEmail(e.target.value)}}/>
        //         <label htmlFor="password">Password</label>
        //         <input type="password" name="" id=""required value={userPassword} onChange={(e)=>{ setuserPassword(e.target.value)}}/>
        //         {errMsg&& <p>{errMsg}</p>}
        //         <button type="submit">AddUser</button>
        //     </form>
        // </div>
     );
}
 
export default AddUser;