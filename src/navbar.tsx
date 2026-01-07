import './pages_css/navbar.css'
import { Link } from "react-router-dom";

function Navbar() {


    return (
        <>
            <div className="button-container">
                <button className="button">
                    <Link className= "nav-link" to="/about">About</Link>
                </button>
                <button className="button">
                    <Link className= "nav-link" to="/projects">Projects & Experience</Link>
                </button>
                <button className="button">
                    <Link className= "nav-link" to="/more">More</Link>
                </button>
            </div>
        </>
    )
}

export default Navbar;