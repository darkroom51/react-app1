import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import MyFirstComponent from './MyFirstComponent'
import Home from './Home'
import Dashboard from './Dashboard'
/*--- day2 ---*/
import Concat from "./Concat";
import OuterComponent from "./OuterComponent";
const firstTextForConcat = "Concat First Text"; /*zwykla zmienna js, do przekazania jako props*/

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <OuterComponent text={"ala ma kota"} />

                    <Concat
                        firstText={firstTextForConcat} /*Przekazujemy ze zwyklej var JS */
                        showText={true}
                    />

                    {/*// <MyFirstComponent name="Matuesz" showName={false}/> */}

                    <Link to={"/"}>Main </Link> |
                    <Link to={"/home"}>Home</Link> |
                    <Link to={"/dashboard"}>Dash</Link> |

                    <Route
                        path="/"
                        exact={true}
                        render={() => (<MyFirstComponent name={"mat"} showName={true}/>)}
                    />
                    <Route path="/home" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        );
    }
}

export default App;
