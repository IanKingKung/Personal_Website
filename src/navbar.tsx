import './pages_css/navbar.css'
import { Link } from "react-router-dom";

function Navbar() {


    return (
        <>
            <div className='navbar-container'>
                <Link className= "nav-link" to="/about">About</Link>
                <Link className= "nav-link" to="/projects">Projects</Link>
                <Link className= "nav-link" to="/more">More</Link>
                
            </div>
        </>
    )
}

export default Navbar;