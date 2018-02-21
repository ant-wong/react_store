import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

class Home extends Component {
  render() {

    const styles = {
      goShop: {
        width: '75%'
      }
    }

    return (
      <div>
        <h1>Welcome to ma shop of wonders<small> and not so wonderful things</small></h1>
        <Link to="/shop">
          <RaisedButton label="Let's go shop" style={styles.goShop}/>
        </Link>
      </div>
    )
  }
}

export default Home