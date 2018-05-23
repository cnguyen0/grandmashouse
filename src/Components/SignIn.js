import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { loggedIn } from './LocalDatabase';

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});
  


// ROYCE TODO THIS FILE!
// ROUTE localhost:3000/signin
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        // Bindings
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    handleSubmit() {
      loggedIn.auth = !loggedIn.auth;
      window.location.replace('/');
    }

  render() {
    const { classes } = this.props;

    return (
      <form noValidate autoComplete="off" align='center'>
        <div className="row" margin="normal">
            <div className="col-xs-12">
                <div className="box">
                  <br/>
                  <br/>
                    <Typography align="center" variant="headline" component="h1">
                        Member Login
                    </Typography>
                </div>
            </div>
        </div>

        <div className="row" margin="normal">
            <div align="center" className="col-xs-12">
              <TextField required id="Username" label="Username" defaultValue=""
                className={classes.textField} margin="normal" name='username' />
            </div>
        </div>

        <div className="row" margin="normal">
            <div align="center" className="col-xs-12">
              <TextField required id="Password" label="Password" defaultValue=""
                type="password" className={classes.textField} margin="normal" name='password' />
          </div>
        </div>


        <div className="row" margin="normal">
            <div className="col-xs-12">
                <div className="box">
                  <br/>
                  <br/>
                  <Button variant="raised" color="primary" className={classes.button} onClick={this.handleSubmit}>
                    Submit
                  </Button>
                </div>
            </div>
        </div>

      </form>
    );
  }
}

  SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(SignIn);

