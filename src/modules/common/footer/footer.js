import './footer.css'

const Footer = () =>{
    return (
        <div className="footer">
            <a class="social-link" title="LinkedIn Profile" href="https://www.linkedin.com/in/meidan-l/" target="_blank" rel="noreferrer"><img class="icon" src="./linkedin.png" alt=""/></a>
            <a class="social-link" title="Github Profile" href="https://github.com/MeidanLeiderman" target="_blank" rel="noreferrer"><img class="icon" src="./github.png" alt=""/></a>
            <a class="social-link" title="Email Me" href="mailto:meidan.leiderman@gmail.com"><img class="icon" src="./email.png" alt=""/></a>
        </div>
    )
}

export default Footer