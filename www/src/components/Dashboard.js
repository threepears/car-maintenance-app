import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from '@material-ui/core/Button'

import { withStyles } from '@material-ui/core/styles'

// We can inject some CSS into the DOM.
const styles = {
  button1: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { storeName: "", phone: "", address: "" };
    this.clickButton = this.clickButton.bind(this)
  }

  clickButton() {
    const that = this
    return axios.get('http://localhost:5000/service-shops')
      .then(function ({ data: { payload } }) {
        const numResults = payload.Midas.length
        const randomStore = Math.floor(Math.random() * numResults)
        const { name, phone, address } = payload.Midas[randomStore]
        that.setState({ storeName: name, phone, address })
      })
      .catch(function (error) {
        console.log("OH NO!!!", error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className='get-data'>
          <h2>Get Data</h2>
          <Button className='button1' variant="contained" color="primary" onClick={this.clickButton}>
            Get
        </Button>
        </div>
        <h2>Your Selected Service Station</h2>
      <div className="storeInfo">
          <h3>{this.state.storeName}</h3>
          <p>{this.state.address}</p>
          <p>{this.state.phone}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Dashboard)
