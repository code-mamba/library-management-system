import { useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({setisAdmin,setisLoggedIn}) => {
    const [userEmail,setuserEmail]=useState('');
    const [userPassword,setuserPassword]=useState('');
    const [errMsg,seterrMsg]=useState(null);
    const navigate=useNavigate();
    const validateForm=(email,password)=>{
      if(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)&&password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
        return false
      }else{
        return true
      };
    }
    const login=(e)=>{
        e.preventDefault();
        if(validateForm(userEmail,userPassword)){
          seterrMsg("Invalid Login Credintials");
          setisLoggedIn(false);
        }
        else{
          axios.get("http://localhost:8000/users?userEmail="+userEmail).then((res)=>{
            if(res.data[0].userPassword===userPassword){
                seterrMsg(null);
                res.data[0].isAdmin?setisAdmin(true):setisAdmin(false);
                setisLoggedIn(true);
                sessionStorage.setItem("id",res.data[0].id);
                sessionStorage.setItem("userName",res.data[0].userName);
                navigate('/home')
            }
            else{
                seterrMsg("Invalid Password or email");
                setisLoggedIn(false);
            }
          });
          
        }
      }
    return (
 
      
      <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login</h2>
          <div className="text-center mb-5 text-dark">LMS</div>
          <div className="card my-5">
  
            <form className="card-body cardbody-color p-lg-5" onSubmit={login} >
  
              <div className="text-center">
               
              </div>
  
              <div className="mb-3">
                <label>Enter Your mail</label>
                <input type="text" className="form-control" id="Username" aria-describedby="emailHelp"
                  placeholder="User Email"required value={userEmail} onChange={(e)=>setuserEmail(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label>Enter password</label>
                <input type="password" className="form-control" id="password" placeholder="password"required value={userPassword} onChange={(e)=>setuserPassword(e.target.value)}/>
                <i class="fa fa-eye fa-fw" aria-hidden="true"></i>
                
                
              </div>
              {errMsg&& <p style={{color: 'red'}}>{errMsg}</p>}
              <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
              <ul><li>Minimum eight characters, at least one letter, one number and one special character:</li></ul>
            </form>
          </div>
  
        </div>
      </div>
    </div>
      
      
      );
}
 
export default Login;