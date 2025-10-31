import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

    return (
        <div>
            <header className='top-grid'>
                <h1 className='tg-header'>Maps</h1>
                <div className='tg-contact'>+1 (800) MAPS </div>
            </header>
            <header className='bottom-grid'>
                <nav className='middle-tabs'>
                    <div className='hamburger-content'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar; 