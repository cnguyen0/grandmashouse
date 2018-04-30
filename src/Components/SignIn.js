import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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

        this.state = {
            isVisible: true
          }

        // Bindings
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      };

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
          isVisible: false
        }, function() {
          console.log(this.state.isVisible)
        });
        return false;
      }

    //   handleSignIn(e) {
    //     e.preventDefault() 
    //     this.setState({
    //         isVisible: false
    //     }, function() {
    //         console.log(this.state.isVisible)
    //     })
    //     let username = this.refs.username.value
    //     let password = this.refs.password.value
    //     this.props.onSignIn(username, password)
    //   }

  render() {
    const { classes } = this.props;
    console.log("Sign Up Form rendered")

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
                className={classes.textField} margin="normal" />
            </div>
        </div>

        <div className="row" margin="normal">
            <div align="center" className="col-xs-12">
              <TextField required id="Password" label="Password" defaultValue=""
                type="password" className={classes.textField} margin="normal" />
          </div>
        </div>


        <div className="row" margin="normal">
            <div className="col-xs-12">
                <div className="box">
                  <br/>
                  <br/>
                  <Button variant="raised" color="primary" className={classes.button}>
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

