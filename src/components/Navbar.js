import '../styles/Navbar.css'
import { Link } from "react-router-dom";
const Navbar = ({isAdmin,isloggedIn,logOut}) => {
    return ( 
        <div className="navbar">
            <nav>
                {isloggedIn&&<ul>
                    <h1>LMS</h1>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/">Back</Link></li>
                    {!isAdmin&&<li><Link to="/my-books">Books</Link></li>}
                    {isAdmin&&<li><Link to="/add-books">Add Book</Link></li>}
                    <li><button onClick={logOut}>Logout</button></li>
                </ul>}
                </nav>
        </div> 
    );
}
 
export default Navbar;