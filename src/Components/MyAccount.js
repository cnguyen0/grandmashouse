import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        margin: 50,
        marginTop: theme.spacing.unit * 3,
      }),
    button: {
        margin: theme.spacing.unit,
      },
});

function handleChange() {
    console.log('checked');
}

function handleSubmit() {
    console.log('submit');
}

function MyAccount(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="display1" component="h3">
          My Account
        </Typography>
        <hr />
        <br /><br />

        {/* NOTIFICATIONS */}
        <Typography variant="headline" component="h3">
          Notifications
        </Typography>
        <hr />

        {/* NOTIFICATION > MESSAGES */}
        <Typography variant="title" component="h3">
          Messages
        </Typography>
        <Typography>
            Receive messages from hosts and guests, including booking requests.
        </Typography>
        <FormGroup row>
            <FormControlLabel
            control={
                <Checkbox
                checked={true}
                onChange={handleChange}
                value="checkedA"
                />
            }
            label="Email"
            />
            <FormControlLabel
            control={
                <Checkbox
                checked={true}
                onChange={handleChange}
                value="checkedA"
                />
            }
            label="Text Message"
            />
            <FormControlLabel
            control={
                <Checkbox
                checked={true}
                onChange={handleChange}
                value="checkedA"
                />
            }
            label="Push Notifications"
            />
        </FormGroup>
        <br />

        {/* NOTIFICATIONS > REMINDERS */}
        <Typography variant="title" component="h3">
            Reminders
        </Typography>
        <Typography>
            Receive booking reminders, requests to write a review, pricing notices, and other reminders related to your activities on Airbnb.
        </Typography>
        <FormGroup row>
            <FormControlLabel
            control={
                <Checkbox
                checked={true}
                onChange={handleChange}
                value="checkedA"
                />
            }
            label="Email"
            />
            <FormControlLabel
            control={
                <Checkbox
                checked={true}
                onChange={handleChange}
                value="checkedA"
                />
            }
            label="Text Message"
            />
            <FormControlLabel
            control={
                <Checkbox
                checked={true}
                onChange={handleChange}
                value="checkedA"
                />
            }
            label="Push Notifications"
            />
        </FormGroup>

        <br />

        {/* NOTIFICATIONS > PROMOTIONS */}
        <Typography variant="title" component="h3">
            Promotions and Tips
        </Typography>
        <Typography>
            Receive coupons, promotions, surveys, product updates, and inspiration from Airbnb and its partners.
        </Typography>
        <FormGroup row>
            <FormControlLabel
            control={
                <Checkbox
                checked={true}
                onChange={handleChange}
                value="checkedA"
                />
            }
            label="Email"
            />
            <FormControlLabel
            control={
                <Checkbox
                checked={true}
                onChange={handleChange}
                value="checkedA"
                />
            }
            label="Text Message"
            />
            <FormControlLabel
            control={
                <Checkbox
                checked={true}
                onChange={handleChange}
                value="checkedA"
                />
            }
            label="Push Notifications"
            />
        </FormGroup>
        <br /><br />

        <Typography variant="headline" component="h3">
          Security
        </Typography>
        <hr />

        {/* CHANGE PASSWORD */}
        <Typography variant="title" component="h3">
            Change Password
        </Typography>

        <TextField
          required
          id="required"
          label="Old Password"
          fullWidth
        />
        <TextField
          required
          id="required"
          label="New Password"
          fullWidth
        />
        <TextField
          required
          id="required"
          label="Confirm New Password"
          fullWidth
        />

        <Button variant="raised" color="primary" className={classes.button} onClick={handleSubmit}>Submit</Button>
      </Paper>
    </div>
  );
}

MyAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAccount);