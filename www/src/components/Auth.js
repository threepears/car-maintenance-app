import React from 'react'
// import { TextField } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

class Auth extends React.Component {
  render() {
    // state = {
    //   name: ''
    // }

    return (
      <form>
        <TextField
          id="outlined-name"
          // label="Enter Name"
          placeholder="Enter Name"
          // className={classes.textField}
          // value={this.state.name}
          // onChange={this.handleChange('name')}
          margin="normal"
          variant="filled"
        />
      </form>
    );
  }
}

export default Auth;