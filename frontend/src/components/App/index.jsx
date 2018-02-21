import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Nav from '../Nav'
import Home from '../Home'
import Shop from '../Shop'
import Cart from '../Cart'

class App extends Component {
  render() {
    
    const styles = {
      body: {
        textAlign: 'center'
      }
    }

    return (
      <MuiThemeProvider>
        <div className="App" style={styles.body}>
        <Nav />
          <Switch>
            <Route exact path="/" render={() => {
              return <Home />
            }} />
            <Route path="/shop" render={() => {
              return <Shop />
            }} />
            <Route path="/checkout" render={() => {
              return <Cart />
            }} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
