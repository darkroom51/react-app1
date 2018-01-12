import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



class App extends Component {
    //initial state of comp
    state = {
        counter : 0,
        isDrawerOpen : false
    }

    componentDidMount(){ // function componentDidMount() to samo co componentDidMount = () => {}, ale to reactowe funkcje i maja zbindowany this, wiec moga bys funkcjami zwyklymi a nie strzalkowymi
        this.setState({ //tylko w ten sposob zmianiamy properties state'u, nigdy beposrednio
            counter : this.state.counter + 1
        }, () => console.log('state has been updated'))
    }

    onMinusClickHandler  = () => {
        this.setState({ //tylko w ten sposob zmianiamy properties state'u, nigdy beposrednio
            counter : this.state.counter - 1
        }, () => console.log('state has been updated'))
    }

    onPlusClickHandler  = () => {
        this.setState({ //tylko w ten sposob zmianiamy properties state'u, nigdy beposrednio
            counter : this.state.counter + 1
        }, () => console.log('state has been updated'))
    }

    drawerToggle = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    }

    render() {
        console.log('Render!', this.state)
        return (
            <MuiThemeProvider>
                <div>
                <AppBar
                    title="My First App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    /*onLeftIconButtonClick={this.drawerToggle()}*/
                />

            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.onMinusClickHandler}>
                    -
                </button>
                <button onClick={this.onPlusClickHandler}>
                    +
                </button>
            </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
