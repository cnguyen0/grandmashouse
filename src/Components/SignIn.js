import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });
  
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];


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
        
        return (
            <div className='Modal'>
              <form onSubmit= { this.props.onSubmit }>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
                <button> Sign In</button>
              </form>
              <div className='social-signin'>
                <button className="fb" onClick={ this.props.onClick }><i className="fa fa-facebook" aria-hidden="true"></i></button>
                <button className="tw" onClick={ this.props.onClick }><i className="fa fa-twitter" aria-hidden="true"></i></button>
              </div>
                <a href='#'>Lost your password ?</a>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField id="Username" label="Username" 
                    className={classes.textField} value={this.state.name}
                    onChange={this.handleChange('Username')} margin="normal"
                    />
                    <TextField id="LastName" label="Last Name" 
                    className={classes.textField} value={this.state.name}
                    onChange={this.handleChange('LastName')} margin="normal"
                    />
                    <TextField id="Email" label="Email" 
                    className={classes.textField} value={this.state.name}
                    onChange={this.handleChange('Email')} margin="normal"
                    />
                </form>
           </div>
        )
    }
}

// Generic input field
    class Input extends React.Component {
    render() {
      return <div className='Input'>
                <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autocomplete='false'/>
                <label for={ this.props.name } ></label>
             </div>
    }
  
  }

  SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(SignIn);

