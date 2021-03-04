import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home-view">
            <div className="intro">
                <h1 className="intro-name">Meidan Leiderman</h1>
                <h5 className="intro-position">Frontend / Full Stack Developer</h5>
                <button className="action-btn btn" title="learn about me"><Link to="/about">Learn about me</Link></button>
            </div>
            <div className="my-photo"></div>
        </div>
    )
}

export default HomePage