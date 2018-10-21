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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { storeName: null };
    this.clickButton = this.clickButton.bind(this)
  }

  clickButton() {
    console.log("BOOOOOO")
    return axios.get('http://localhost:5000/service-shops')
      .then(function (response) {
        console.log("RESULT", response);
        this.setState({storeName: "Steve"})
      })
      .catch(function (error) {
        console.log("OH NO", error);
      });
  }

  render() {
    return (
      <div className='butt'>
        <h2>Get Data</h2>
        <h3>{this.state.storeName}</h3>
        <Button className='button1' variant="contained" color="primary" onClick={this.clickButton}>
          Get
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(App)
