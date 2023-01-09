import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

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
            fetch('http://localhost:8000/users',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(user)
            }).then((res)=>{navigate('/');}).catch((err)=>{console.log(err);})
        }
    }
    return ( 

        <div className="Signin">
        <form className="sign-in-container" onSubmit={addUser}>

          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input type="text" required value ={userName} onChange = {(e)=>{setuserName(e.target.value)}}></input>
            <label  htmlFor="email">E-mail</label>
            <input type="text" required value={userEmail} onChange={(e)=>setuserEmail(e.target.value)}></input>
            <label htmlFor="password">Password</label>
            <input type="password" required value={userPassword} onChange={(e)=>setuserPassword(e.target.value)}></input>
            {errMsg&& <p>{errMsg}</p>}
            </div>
            <button className="AddBookBut">Sign Up</button>

          

        </form>
      </div>

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