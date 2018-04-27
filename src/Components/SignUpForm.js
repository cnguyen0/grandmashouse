import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

//Royce: Sample SignUpForm with material-ui-next

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

const states = [
  { value: 'Alabama', label: 'AL', }, { value: 'Alaska', label: 'AK', },
  { value: 'Arizona', label: 'AZ', }, { value: 'Arkansas', label: 'AR', },
  { value: 'California', label: 'CA', }, { value: 'Colorado', label: 'CO', },
  { value: 'Connecticut', label: 'CT', }, { value: 'Delaware', label: 'DE', },
  { value: 'District of Columbia', label: 'DC', }, { value: 'Florida', label: 'FL', },
  { value: 'Georgia', label: 'GA', }, { value: 'Hawaii', label: 'HI', },
  { value: 'Idaho', label: 'ID', }, { value: 'Illinois', label: 'IL', },
  { value: 'Indiana', label: 'IN', }, { value: 'Iowa', label: 'IA', },
  { value: 'Kansas', label: 'KS', }, { value: 'Kentucky', label: 'KY', },
  { value: 'Louisiana', label: 'LA', }, { value: 'Maine', label: 'ME', },
  { value: 'Maryland', label: 'MD', }, { value: 'Massachusetts', label: 'MA', },
  { value: 'Michigan', label: 'MI', }, { value: 'Minnesota', label: 'MN', },
  { value: 'Mississippi', label: 'MS', }, { value: 'Missouri', label: 'MO', },
  { value: 'Montana', label: 'MT', }, { value: 'Nebraska', label: 'NE', },
  { value: 'Nevada', label: 'NV', }, { value: 'New Hampshire', label: 'NH', },
  { value: 'New Jersey', label: 'NJ', }, { value: 'New Mexico', label: 'NM', },
  { value: 'New York', label: 'NY', }, { value: 'North Carolina', label: 'NC', },
  { value: 'North Dakota', label: 'ND', }, { value: 'Ohio', label: 'OH', },
  { value: 'Oklahoma', label: 'OK', }, { value: 'Oregon', label: 'OR', },
  { value: 'Pennsylvania', label: 'PA', }, { value: 'Rhode Island', label: 'RI', },
  { value: 'South Carolina', label: 'SC', }, { value: 'South Dakota', label: 'SD', },
  { value: 'Tennessee', label: 'TN', }, { value: 'Texas', label: 'TX', },
  { value: 'Utah', label: 'UT', }, { value: 'Vermont', label: 'VT', },
  { value: 'Virginia', label: 'VA', }, { value: 'Washington', label: 'WA', },
  { value: 'West Virginia', label: 'WV', }, { value: 'Wisconsin', label: 'WI', },
  { value: 'Wyoming', label: 'WY', },
];

class SignUpForm extends React.Component {
  state = {
    FirstName: '',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    console.log("Sign Up Form rendered")

    return (
      <form className={classes.container} noValidate autoComplete="off">
        
        <TextField required id="Username" label="Username" defaultValue=""
          className={classes.textField} margin="normal" />

        <TextField required id="FirstName" label="First Name" className={classes.textField}
          value={this.state.FirstName} onChange={this.handleChange('name')} margin="normal" />
        
        <TextField required id="LastName" label="Last Name" defaultValue=""
          className={classes.textField} margin="normal" />
        
        <TextField required id="Email" label="Email" defaultValue=""
          className={classes.textField} margin="normal" />

        <TextField required id="Password" label="Password" defaultValue=""
          type="password" className={classes.textField} margin="normal" />

        <TextField required id="PasswordComf" label="Confirm Password" className={classes.textField}
          type="password" autoComplete="current-password" margin="normal" />

        <TextField required id="multiline-flexible" label="Multiline" multiline rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />
        <TextField
          id="with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="textarea"
          label="With placeholder multiline"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="number"
          label="Number"
          value={this.state.age}
          onChange={this.handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

        <TextField
          id="search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="select-state"
          select
          label="State"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your State"
          margin="normal"
        >
          {states.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <TextField id="full-width" label="Label" InputLabelProps={{ shrink: true, }}
          placeholder="Placeholder" helperText="Full width!" fullWidth margin="normal" />
          
      </form>
    );
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);