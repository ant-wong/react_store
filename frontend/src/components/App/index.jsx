import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Nav from '../Nav'
import Home from '../Home'
import Shop from '../Shop'
import Cart from '../Cart'

class App extends Component {
  constructor() {
    super() 
      this.state = {
        username: "",
        cartQty: 0
    }
  }


  addItem = () => {
    this.setState({
      cartQty: this.state.cartQty + 1
    })
  }

  render() {
    
    const styles = {
      body: {
        textAlign: 'center',
        fontFamily: "'Dosis', sans-serif"
      }
    }

    return (
      <MuiThemeProvider>
        <div className="App" style={styles.body}>
        <Nav cartQty={this.state.cartQty}/>
          <Switch>
            <Route exact path="/" render={() => {
              return <Home username={this.state.username}/>
            }} />
            <Route path="/shop" render={() => {
              return <Shop username={this.state.username}
                           addItem={this.addItem}/>
            }} />
            <Route path="/checkout" render={() => {
              return <Cart username={this.state.username}
                           cartQty={this.state.cartQty}/>
            }} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
