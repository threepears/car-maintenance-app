import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})

class Auth extends React.Component {
  state = {
    email: '',
    password: '',
  }
  
  handleChange = (e, field) => {
    this.setState({
      [field] : e.target.value
    })
  }

  submitInfo = () => {
    const { email, password } = this.state
    console.log("EMAIL", email, "PASSWORD", password)
  }

  render() {
    const { classes } = this.props

    return (
      <form>
        <TextField
          className={classes.textField}
          id="outlined-name"
          label="Enter Email"
          margin="normal"
          onChange={e => this.handleChange(e, 'email')}
          placeholder="Enter Email"
          type="email"
          value={this.state.email}
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="outlined-name"
          label="Enter Password"
          margin="normal"
          onChange={e => this.handleChange(e, 'password')}
          placeholder="Enter Password"
          type="password"
          value={this.state.password}
          variant="outlined"
        />
        <div>
          <Button 
            color="primary" 
            onClick={this.submitInfo} 
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);