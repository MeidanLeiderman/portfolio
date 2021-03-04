import './header.css'
import { useLocation, Link } from 'react-router-dom'

const Header = () => {

    const currentPath = useLocation().pathname
    const isActive = (location) => {
        if (location === currentPath) return 'active-link'
        else return ''
    }

    return (
        <div className="header">
            <ul className="navbar">
                <li className={"nav-link " + isActive('/')}><Link to="/">Home</Link></li>
                <li className={"nav-link " + isActive('/portfolio')}><Link to="/portfolio">Portfolio</Link></li>
                <li className={"nav-link " + isActive('/about')}><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Header