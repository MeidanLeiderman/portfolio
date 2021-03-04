import Project from '../../common/projectCard/project';
import './PortfolioPage.css';

const PortfolioPage = () => {
    const projects = [
        { id: 1, title: 'Cinematik', description: 'A Single-page movie database application that allows to see, search and sort lists of all popular movies.', image: 'cinematik.jpg', url: 'https://meidanleiderman.github.io/cinematik/' },
        { id: 2, title: 'HikeMate', description: 'A web application that allows users to search trails by name/category. Users are able to plan trips by finding hiking partners and message them, draft a packing list, publish their hiking experience and upload trail photos.', image: 'hikeMate.jpg', url: 'https://hike-mate.herokuapp.com/' },
        { id: 3, title: 'Mr. Bitcoin', description: 'A bitcoin wallet application that allows users to see current Bitcoin value trends and make transfers.', image: 'mr-bitcoin.jpg', url: 'https://meidanleiderman.github.io/mister-bitcoin/#/' },
        { id: 4, title: 'Keep', description: 'A web application that allows users to search trails by name/category. Users are able to plan trips by finding hiking partners and message them, draft a packing list, publish their hiking experience and upload trail photos.', image: 'keep.jpg', url: 'https://meidanleiderman.github.io/vue-note/#/' },
        { id: 5, title: 'Meme Generator', description: 'A meme generator application that allows users to implement text and icons over a picture to create ‘memes’.', image: 'meme-generator.jpg', url: 'https://meidanleiderman.github.io/meme-generator/#/' },
    ]
    return (
        <div className="portfolio-page">
            <div className="project-list">
                {projects.map(project => {
                    return (
                        <a href={project.url} rel="noreferrer" target="_blank"><Project project={project} key={project.id} /></a>
                    )
                })}
            </div>
        </div>
    )
}
export default PortfolioPage