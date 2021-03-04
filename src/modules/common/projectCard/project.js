import './project.css'

const Project = ({project}) => {
    return (
        <div className="project">
            <img className="project-img" src={`./${project.image}`} alt="project"/>
            <h1 className="project-title">{project.title}</h1>
        </div>
    )
}

export default Project