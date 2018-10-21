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

const clickButton = () => {
  console.log("BOOOOOO")
  return axios.get('/service-shops')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}


class App extends Component {
  render() {
    return (
      <div className='butt'>
        <h2>Get Data</h2>
        <Button className='button1' variant="contained" color="primary" onClick={clickButton}>
          Get
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(App)
