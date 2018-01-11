import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MyFirstComponent from './MyFirstComponent'
import Home from './Home'
import Dashboard from './Dashboard'


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/*// <MyFirstComponent name="Matuesz" showName={false}/> */}

                    <Link to={"/"}>Main</Link>
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/dashboard"}>Dash</Link>

                    <Route path="/"  exact={true} render={() => (<MyFirstComponent name={"Mateusz"} showName={true}/>)} />
                    <Route path="/home" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        );
    }
}

export default App;
