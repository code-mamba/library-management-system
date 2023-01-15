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
      if(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)&&password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)){
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
          // fetch("http://localhost:8000/users?userEmail="+userEmail).then(res=>{
          //   return res.json();
          // }).then((data)=>{
          //   if(data.length===0){
          //     seterrMsg("Invalid Login Credintials");
          //     setisLoggedIn(false);
          //   }
          //   else{
          //     if(data[0].userPassword===userPassword){
          //       seterrMsg(null);
          //       data[0].isAdmin?setisAdmin(true):setisAdmin(false);
          //       setisLoggedIn(true);
          //       navigate('/home')
          //     }
          //     else{
          //       seterrMsg("Invalid Password");
          //       setisLoggedIn(false);
          //     }
          //   }
          // }).catch(err=>{
          //   console.log(err)
          // })
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
              </div>
              {errMsg&& <p>{errMsg}</p>}
              <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
           
            </form>
          </div>
  
        </div>
      </div>
    </div>
      
    
      // <div className="Login">
         
      //   <form className="LoginContainer" onSubmit={login}>
      //     <h1>Welcome Back</h1>
      //     <div className="input-container">
      //       <label  htmlFor="email">E-mail</label>
      //       <input type="text" required value={userEmail} onChange={(e)=>setuserEmail(e.target.value)}></input>
      //       <label htmlFor="password">Password</label>
      //       <input type="password" required value={userPassword} onChange={(e)=>setuserPassword(e.target.value)}></input>
      //       {errMsg&& <p>{errMsg}</p>}
      //       <button className="loginBut">Login</button>

      //     </div>

      //   </form>
      // </div>
      
        // <div className="my-form">
        //   <Link to="/"><h3>Login</h3></Link>
        //   <h3><Link to="add-user">Add User</Link></h3>
        //   <form onSubmit={login}>
        //     <label htmlFor="email">E-mail</label>
        //     <input type="email" name="" id=""required value={userEmail} onChange={(e)=>{ setuserEmail(e.target.value)}}/>
        //     <label htmlFor="password">Password</label>
        //     <input type="password" name="" id=""required value={userPassword} onChange={(e)=>{ setuserPassword(e.target.value)}}/>
        //     {errMsg&& <p>{errMsg}</p>}
        //     <button type="submit">Login</button>
        //   </form>
        // </div>
      );
}
 
export default Login;