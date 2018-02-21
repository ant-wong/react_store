import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class Rice extends Component {
  render() {

    const styles = {
      img: {
        height: '8em',
        marginBottom: '5%'
      },
      itemName: {
        fontSize: '2.5em'
      },
      price: {
        fontSize: '1.5em',
        marginRight: '5%'
      }
    }

    console.log(this.props.items)
    let riceJSX = this.props.items.map((item,i) => {
      if(item.type === "rice") {
        return <div className="col-md-3" key={i}>
          <img src={item.img} alt="displayItem" style={styles.img} />
          <h3 style={styles.itemName}>{item.name}</h3>
          <span style={styles.price}>{item.price}</span>
          <FloatingActionButton mini={true}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      }
    })

    return (
      <div className="container">
        <div className="row">
          {riceJSX}
        </div>
      </div>
    )
  }
}

export default Rice