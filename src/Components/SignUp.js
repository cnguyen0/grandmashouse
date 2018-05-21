import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import SignUpForm from './SignUpForm.js';
import ContentPage from './ContentPage';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';


//Royce: Sample Stepper with material-ui-next
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
  checkbox: {
    margin: '20px'
  }
});

function getSteps() {
  return ['Review Terms & Conditions', 'Personal Information', 'Confirm Food Handlers'];
}

class SignUp extends React.Component {
  state = {
    activeStep: 0,
    tosCheck: false
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  handleChange = () => {
    this.setState({tosCheck: !this.state.tosCheck})
  }

  getStepContent(stepIndex) {
    const { classes } = this.props;
    
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <ContentPage
              title={'Grandma\'s House Terms of Services'}
              txtFile='./termsofservice.txt'
            />
            <FormControlLabel className={classes.checkbox}
              control={
                <Checkbox
                  color="secondary"
                  onChange={this.handleChange}
                />
              }
              label="I agree to the Terms of Services"
            />
          </div>
        );
      case 1:
    return (<SignUpForm />);
      case 2:
        return (<Typography className={classes.instructions}>This is the bit I really care about!</Typography>);
      default:
        return (<Typography className={classes.instructions}>Unknown stepIndex</Typography>);
    }
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => {
            return (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            );
          })}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&quot;re finished
              </Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <div>{this.getStepContent(activeStep)}</div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="raised" color="primary" onClick={this.handleNext} disabled={!this.state.tosCheck}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(SignUp);