import './Footer.css'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {

    return (
        <>
        <footer classname='footer'>
            <p>2025 Baybhin Gurung</p>
            <div>
                <FaGithub />
                <FaLinkedin />
            </div>
        </footer>
        </>
    )
};