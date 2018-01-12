import React, {Component} from 'react';

class App extends Component {
    //initial state of comp
    state = {
        counter : 0
    }

    componentDidMount(){
        this.setState({
            counter : 5
        }, () => console.log('state has been updated'))
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
            </div>
        )
    }
}

export default App;
