import React from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import './App.css';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 30,
      paddingBottom: 30,
      margin: 50,
      marginTop: theme.spacing.unit * 3,
    }),
});

class LearnMore extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className='learnmore'>
              <img src={this.props.image} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}} />
              <Button variant="raised" color="secondary" style={{fontSize: '50px', display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}} className={classes.button}>
                Sign Up!
              </Button>
            </div>
        );
    }
}

export default withStyles(styles)(LearnMore);
