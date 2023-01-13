import { useState } from "react";
import "../styles/Login.css"
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
            if(res.data.length===0){
              seterrMsg("Invalid Login Credintials");
              setisLoggedIn(false);
            }
            else{
              if(res.data[0].userPassword===userPassword){
                seterrMsg(null);
                res.data[0].isAdmin?setisAdmin(true):setisAdmin(false);
                setisLoggedIn(true);
                localStorage.setItem("id",res.data[0].id);
                navigate('/home')
              }
              else{
                seterrMsg("Invalid Password");
                setisLoggedIn(false);
              }
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
      <>
      <Link to="/"><h1>Login</h1></Link>
      <h3><Link to="add-user">Add User</Link></h3>
      <div className="Login">
         
        <form className="LoginContainer" onSubmit={login}>
          <h1>Welcome Back</h1>
          <div className="input-container">
            <label  htmlFor="email">E-mail</label>
            <input type="text" required value={userEmail} onChange={(e)=>setuserEmail(e.target.value)}></input>
            <label htmlFor="password">Password</label>
            <input type="password" required value={userPassword} onChange={(e)=>setuserPassword(e.target.value)}></input>
            {errMsg&& <p>{errMsg}</p>}
            <button className="loginBut">Login</button>

          </div>

        </form>
      </div>
      </>
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