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





function App() {
  const [isLoggedIn,setisLoggedIn]=useState(false);
  const [isAdmin,setisAdmin]=useState(null);
  const navigate=useNavigate();
  const logOut=()=>{
    setisLoggedIn(false);
    setisAdmin(false);
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("userName");
    navigate('/');
  }
  useEffect(()=>{
    setisLoggedIn(!!sessionStorage.getItem("id"));
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
              

              
              <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
