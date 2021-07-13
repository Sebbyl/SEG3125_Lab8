import { Link } from "react-router-dom";
import { useHistory } from 'react-router';

const Navbar = () =>{
    return(
        <div className = "container-fluid">
        
        <nav className = "text-center border-bottom my-3">
            <h1>Premium Hotels</h1>
            <span><Link to = "/">English</Link></span> | <span><Link to = "/FR">French</Link></span>
            
        </nav>
        </div>
        
    );
}

export default Navbar