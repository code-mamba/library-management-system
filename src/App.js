import './App.css';
import { useEffect, useState } from 'react';
import { Route,Routes,useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import AddBooks from './components/AddBooks/AddBooks';
import MyBooks from './components/MyBooks/MyBooks';
import Login from './components/Login/Login'
import PageNotFound from './components/404/404';
import Navbar from './components/Navbar/Navbar';
import AddUser from './components/AddUser/AddUser';
import EditBook from './components/EditBook/EditBook';
import RentBook from './components/RentBooks/RentBooks';
import RentList from './components/RentList/RentList';
import Routing from './Routes';

import UserProfile from './components/userProfile/userProfile';
import EditProfile from './components/editProfile/editProfile'

function App() {
  const [isLoggedIn,setisLoggedIn]=useState(false);
  const [isAdmin,setisAdmin]=useState(null);
  const navigate=useNavigate();
  const logOut=()=>{
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("isAdmin")
    setisAdmin(false);
    setisLoggedIn(false);
    navigate('/');
  }
  useEffect(()=>{
    setisLoggedIn(!!sessionStorage.getItem("id"));
    setisAdmin(sessionStorage.getItem('isAdmin'))
    console.log("isAdmin",isAdmin)
    console.log("isLoggedin",isLoggedIn)
    
  },[])
  return (
    <div className="App">
      <Navbar isAdmin={isAdmin} isloggedIn={isLoggedIn} logOut={logOut}/>
        <Routes>
              <Route path="/"element={<Login setisLoggedIn={setisLoggedIn} setisAdmin={setisAdmin}/>}></Route>
              <Route path='/add-user' element={<AddUser/>}></Route>
              {isLoggedIn&&<Route path="/add-books"element={<AddBooks/>}></Route>}
              {isLoggedIn&&<Route path="/my-books"element={<MyBooks/>}></Route>}
              {isLoggedIn&&<Route path="/home"element={<Home isAdmin={isAdmin}/>}></Route>}
              {isLoggedIn&&<Route path = '/edit-books/:id' element={<EditBook/>}></Route>}
              {isLoggedIn && <Route path='/rent-books/:id' element={<RentBook/>}></Route>}
             
              {isLoggedIn &&<Route path='/rent-list' element={<RentList/>}></Route>}
              {isLoggedIn &&<Route path='/user-profile'element={<UserProfile/>} ></Route>}
              {isLoggedIn &&<Route path='/edit-profile' element={<EditProfile/>} ></Route>}

              
              <Route path='*' element={<PageNotFound/>}></Route>
              
        </Routes>
    </div>
  );
}

export default App;
