import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Reserve from './components/Reserve';
import AnotherComponent from './components/AnotherComponent';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/reserve" component={Reserve} />
                <Route path="/another" component={AnotherComponent} />
            </Switch>
        </Router>
    );
};

export default App;