import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="about">
            <div className="text-container">
                <p class="paragraph">Hi, I am Meidan, a Full Stack Developer based in Vaughan, Ontario. I am a self-taught developer who started this journey as a source of creativity while striving to create a better web. </p>
                <p class="paragraph">My skills include frontend development in Javascript, utilizing libraries/frameworks including React and Vue.js. On the backend side, I am proficient with Node.js and databases such as MySQL and MongoDB. I strive towards consistancy, building efficient code and optimizing user experience. </p>
            </div>
            <div className="tech-logos">
                <img class="logo" src="./javascript.svg" alt="" />
                <img class="logo" src="./css3.svg" alt="" />
                <img class="logo" src="./html5.svg" alt="" />
                <img class="logo" src="./vue.svg" alt="" />
                <img class="logo" src="./react.svg" alt="" />
                <img class="logo" src="./sass.svg" alt="" />
                <img class="logo" src="./node.svg" alt="" />
                <img class="logo" src="./mongodb.svg" alt="" />
                <img class="logo" src="./git.svg" alt="" />
            </div>
        </div>
    )
}

export default AboutPage