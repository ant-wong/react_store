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
        cart: [],
        cartQty: 0,
        fireRedirect: false
    }
  }

  // FORM HANDLE
  textHandler = (ev) => {
    ev.preventDefault()
    this.state.username = ev.target.value
    this.setState({
      username: this.state.username
    })
    // console.log(this.state.username)
  }

  // ADD USER
  submitName = () => {
    localStorage.setItem('user', JSON.stringify(this.state.username))
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({
      username: user,
      fireRedirect: true
    })
  }

  // INCREMENT CART
  plusItem = (item) => {
    this.setState({
      cart: this.state.cart.concat(item),
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
        <Nav cartQty={this.state.cartQty} totalPrice={this.state.totalPrice}/>
          <Switch>
            <Route exact path="/" render={() => {
              return <Home username={this.state.username}
                           textHandler={this.textHandler}
                           submitName={this.submitName}
                           fireRedirect={this.state.fireRedirect}/>
            }} />
            <Route path="/shop" render={() => {
              return <Shop username={this.state.username}
                           plusItem={this.plusItem}/>
            }} />
            <Route path="/checkout" render={() => {
              return <Cart username={this.state.username}
                           cartQty={this.state.cartQty}
                           cart={this.state.cart}/>
            }} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
