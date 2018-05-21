import React from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import './App.css';
import { Link } from 'react-router-dom';


const SignUp = props => <Link to="/signup" {...props} />

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
                <Paper elevation={3}>
                    <div>
                        <img src={this.props.image} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "60%"}} alt='idk something'/>

                        <Button variant="raised" color="secondary" style={{fontSize: '50px', display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}} className={classes.button} component={SignUp}>
                            Sign Up!
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(LearnMore);
