import React from 'react'
import './styles/global.scss';
import {Footer} from "./components/global/Footer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./components/global/Header/Header";
import PageRender from "./PageRender";


function App() {
    return (
        <div className={"main"}>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={PageRender}/>
                    <Route exact path='/:page' component={PageRender}/>
                    <Route exact path='/:page/:slug' component={PageRender}/>
                </Switch>
                <Footer/>
            </Router>
        </div>);
}

export default App;
