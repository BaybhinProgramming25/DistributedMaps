import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const handleLogin = () => {

    console.log("Log In Clicked");

}

const handleSignUp = () => {

    console.log("Sign Up Clicked");
}


export const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);



    return (
        <> 
            <nav>
                <NavLink to="/" className='title'>Website</NavLink>
                <div className='menu' onClick={() => {
                    console.log(menuOpen);
                    setMenuOpen(!menuOpen)}}>    
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open": ""}>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};
