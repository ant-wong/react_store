import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Badge from 'material-ui/Badge';
import logo from '../../img/rice-bowl.svg'
import cart from '../../img/shopping.svg'

class Nav extends Component {
  render() {

    const styles = {
      navStyle: {
        backgroundColor: '#009688',
        padding: '2% 1.5% 1% 1.5%',
        fontFamily: "'Dosis', sans-serif"
      },
      title: {
        cursor: 'pointer',
        fontSize: '2.2em',
        position: 'relative',
        right: '40%',
        textDecoration: 'none',
        color: 'white'
      },
      icon: {
        cursor: 'pointer',
        height: '5em',
        position: 'relative',
        bottom: '12%',
        marginLeft: '3em'
      },
      cartButton: {
        height: '4em',
        marginRight: '1em',
      },
      badge: {
        position: 'relative',
        right: '30%'
      }
    };

    return (
      <AppBar
        title={
          <Link to="/shop" style={styles.title}>
            <span>Uncle A's</span>
          </Link>
          }
        iconElementLeft={
          <Link to="/">
            <img src={logo} alt="logo" style={styles.icon}/>
          </Link>
          }
        
        iconElementRight={
          <div>
            <Badge
              badgeContent={4}
              primary={true}
              style={styles.badge}
            >
            <Link to="/checkout">
              <img src={cart} alt="cart" style={styles.cartButton}/>
            </Link>
            </Badge>
          </div>
          }
        style={styles.navStyle}
      />
    )
  }
}

export default Nav