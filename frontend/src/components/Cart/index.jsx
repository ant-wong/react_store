import React, { Component } from 'react'

import '../../img/rice1.svg'
import '../../img/rice2.svg'
import '../../img/rice3.svg'
import '../../img/rice4.svg'
import '../../img/rice5.svg'
import '../../img/rice6.svg'

import '../../img/noodle1.svg'
import '../../img/noodle2.svg'
import '../../img/noodle3.svg'
import '../../img/noodle4.svg'
import '../../img/noodle5.svg'
import '../../img/noodle6.svg'

class Cart extends Component {
  
  render() {

    const styles = {
      title: {
        fontSize: '3em',
        padding: '1.3% 0%'
      },
      sideText: {
        position: 'relative',
        top: '2em'
      },
      img: {
        height: '8em',
        marginBottom: '5%'
      },
      itemName: {
        fontSize: '2.5em'
      },
      price: {
        fontSize: '1.5em'
      }
    }

    // MAP OUT CART ARRAY
    let cartJSX = this.props.cart.map((item, i) => {
      return <div className="col-md-6" key={i}>
        <img src={item.img} alt="displayItem" style={styles.img} />
        <h3 style={styles.itemName}>{item.name}</h3>
        <span style={styles.price}>{item.price}</span>
        </div>
    })

    // PRICE
    let totalPrice = this.props.cart.map((item, i) => {
      return item.price
    })

    const reducer = (accumulator, currentValue) => accumulator + currentValue

    const priceFunction = (arr) => {
      let finalPrice 
      if(arr.length === 0) {
        return finalPrice = 0
      } else if (arr) {
        return finalPrice = arr.reduce(reducer)
      }
    }

    return (
      <div>
        <h1 style={styles.title}>CHECK IT OUT</h1>
        <hr/>
        <div className="container-fluid"> 
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                {cartJSX}
              </div>
            </div>
            <div classNam="col-md-4">
              <h3 style={styles.sideText}>
                You have {this.props.cartQty} items in your order so far! 
                <br/>
                For a total of ${priceFunction(totalPrice)}!
              </h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cart