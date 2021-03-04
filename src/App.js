import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './modules/common/header/header';
import Footer from './modules/common/footer/footer'
import HomePage from './modules/pages/homepage/HomePage';
import PortfolioPage from './modules/pages/portfolio/PortfolioPage';
import AboutPage from './modules/pages/about/AboutPage';

function App() {

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/portfolio" component={PortfolioPage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
