import '../styles/Navbar.css'
import { Link,useNavigate } from "react-router-dom";

const Navbar = ({isAdmin,isloggedIn,logOut}) => {

    const navigate=useNavigate();
    const back=()=>{
        navigate(-1);
    };
    return ( 
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">LMS</a>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {!isloggedIn&&<Link to="/" className="nav-link active">Login</Link>}
                            {!isloggedIn&&<Link to="/add-user" className="nav-link">Register</Link>}
                            {isloggedIn&&<Link to="/home" className="nav-link" >Home</Link>}
                            {isloggedIn && !isAdmin&&<Link to="/my-books" className="nav-link" >My Books</Link>}
                            {isloggedIn && isAdmin&&<Link to="/add-books" className="nav-link" >Add Book</Link>}
                            {isloggedIn && isAdmin&&<Link to="/rent-list" className="nav-link" >Rent List</Link>}
            
                            {isloggedIn&&<button className='btn' onClick={logOut}>Logout</button>}
                        </div>
                    </div>
                </div>
            </nav>
        </div> 
    );
}
 
export default Navbar;