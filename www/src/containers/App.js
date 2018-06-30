import React, { Component } from 'react'
import { render } from 'react-dom'
import Button from '@material-ui/core/Button'


export default class App extends Component {
  render() {
    return (
      <div className='butt'>
        <h1>Hello ReactJs</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    )
  }
}
