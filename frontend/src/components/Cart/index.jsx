import React, { Component } from 'react'

class Cart extends Component {
  render() {
    return (
      <div>
        <h1>CHECK IT OUT</h1>
        <hr/>
        <h3>You have {this.props.cartQty} items in your order so far!</h3>
      </div>
    )
  }
}

export default Cart