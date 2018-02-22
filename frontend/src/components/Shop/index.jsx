import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'

import Rice from './Rice'
import Noodles from './Noodles'

import rice1 from '../../img/rice1.svg'
import rice2 from '../../img/rice2.svg'
import rice3 from '../../img/rice3.svg'
import rice4 from '../../img/rice4.svg'
import rice5 from '../../img/rice5.svg'
import rice6 from '../../img/rice6.svg'

import noodle1 from '../../img/noodle1.svg'
import noodle2 from '../../img/noodle2.svg'
import noodle3 from '../../img/noodle3.svg'
import noodle4 from '../../img/noodle4.svg'
import noodle5 from '../../img/noodle5.svg'
import noodle6 from '../../img/noodle6.svg'

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          name: 'rice1',
          price: 5.29,
          img: rice1,
          type: 'rice'
        },
        {
          name: 'rice2',
          price: 6.59,
          img: rice2,
          type: 'rice'
        },
        {
          name: 'rice3',
          price: 5.99,
          img: rice3,
          type: 'rice'
        },
        {
          name: 'rice4',
          price: 7.89,
          img: rice4,
          type: 'rice'
        },
        {
          name: 'rice5',
          price: 4.49,
          img: rice5,
          type: 'rice'
        },
        {
          name: 'rice6',
          price: 6.99,
          img: rice6,
          type: 'rice'
        },
        {
          name: 'noodle1',
          price: 4.79,
          img: noodle1,
          type: 'noodle'
        },
        {
          name: 'noodle2',
          price: 5.29,
          img: noodle2,
          type: 'noodle'
        },
        {
          name: 'noodle3',
          price: 2.99,
          img: noodle3,
          type: 'noodle'
        },
        {
          name: 'noodle4',
          price: 5.39,
          img: noodle4,
          type: 'noodle'
        },
        {
          name: 'noodle5',
          price: 4.79,
          img: noodle5,
          type: 'noodle'
        },
        {
          name: 'noodle6',
          price: 3.99,
          img: noodle6,
          type: 'noodle'
        }
      ]
    }
  }
  
  render() {

    const riceList = this.state.items.filter(item => item.type === "rice")
    const noodleList = this.state.items.filter(item => item.type === "noodle")

    const styles = {
      body: {
        paddingBottom: '18%'
      },
      bottomNav: {
        backgroundColor: '#C62828',
        height: '6em',
        position: 'fixed',
        left: 0,
        bottom: 0
      },
      title: {
        fontSize: '3em',
        padding: '1.3% 0%'
      },
      welcome: {
        margin: '1.6em 0'
      },
      link: {
        textAlign: 'center'
      },
      icon: {
        minWidth: '100%',
        color: 'white'
      },
      text: {
        fontSize: '4em'
      }
    }

    return (
      <div style={styles.body}>
        <h1 style={styles.title}>
          Issa shop
        </h1>
        <hr/>
        <div className="container">
          <h2 style={styles.welcome}>Welcome {this.props.username}! Come eat my food, sweet cheeks</h2>
        </div>

        <Switch>
          <Route path="/shop/rice" render={() => {
            return <Rice items={riceList}
                         plusItem={this.props.plusItem}/>
          }} />
          <Route path="/shop/noodles" render={() => {
            return <Noodles items={noodleList}
                            plusItem={this.props.plusItem}/>
          }} />
        </Switch>

        <Paper zDepth={3}>
          <BottomNavigation style={styles.bottomNav}>
            <Link to="/shop/rice" style={styles.link}>
              <BottomNavigationItem
                label="Rice, yo"
                icon={<i className="material-icons" style={styles.text}>child_care</i>}
                style={styles.icon}
              />
            </Link>
            <Link to="/shop/noodles" style={styles.link}>
              <BottomNavigationItem
                label="Send noods"
                icon={<i className="material-icons" style={styles.text}>beach_access</i>}
                style={styles.icon}
              />
            </Link>
          </BottomNavigation>
        </Paper>
      </div>
    )
  }
}

export default Shop