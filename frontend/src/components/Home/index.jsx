import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


class Home extends Component {
  render() {

    const { from } = this.props.location || '/'
    const { fireRedirect } = this.props
  
    const styles = {
      body: {
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/73/Xihulou_29.JPG")',
        minHeight: '70em',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
      title: {
        fontSize: '5em',
        color: 'white',
        position: 'relative',
        top: '1.7em'
      },
      goShop: {
        width: '50rem',
        position: 'relative',
        top: '20em',
      },
      inputStyle: {
        color: '#FAFAFA'
      },
      floatingLabelStyle: {
        color: '#FDD835'
      },
      floatingLabelFocusStyle: {
        color: '#FDD835'
      },
      underlineStyle: {
        borderColor: '#FDD835'
      },
      textFld: {
        fontSize: '1.5em',
        width: 700,
        height: 100,
        position: 'relative',
        top: '7em',
        fontFamily: "'Dosis', sans-serif"
      },
    }

    return (
      <div style={styles.body}>
        <div className="container">
          <h1 style={styles.title}>Welcome to ma shop of wonders<small> and not so wonderful things</small></h1>
          <form action="" 
                onChange={(event) => { this.props.textHandler(event) }}
                onSubmit={this.props.submitName}>
            <TextField
              floatingLabelText="Please enter a name!"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle}
              inputStyle={styles.inputStyle}
              style={styles.textFld} 
              name="username"/>
          </form>
          {fireRedirect && (
            <Redirect to={from || '/shop'} />
          )}
          <Link to="/shop">
            <RaisedButton label="Let's go eat" style={styles.goShop}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home