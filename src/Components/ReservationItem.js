import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      margin: 50,
      marginTop: theme.spacing.unit * 3,
      // display: 'flex',
      // flexWrap: 'wrap',
      // justifyContent: 'space-around',
      // overflow: 'hidden',
			backgroundColor: theme.palette.background.paper,
    }),
		rsvpImg: {
			width: '125px',
			height: '125px',
			borderRadius: '50%', 
		}
});


// TODO: MAKE PRETTY!!!
class ReservationItem extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <img src={this.props.item.image[0]} className={classes.rsvpImg} alt='food item one' />
										<Typography variant="headline" component="h1">
                      {this.props.item.title}
                    </Typography>
										<Typography variant="headline" component="h1">
                      {this.props.item.city + ', ' + this.props.item.state}
                    </Typography>
										<Typography variant="headline" component="h1">
                      {this.props.rsvp.price}
                    </Typography>
										<Typography variant="headline" component="h1">
                      {'Quantity: ' + this.props.rsvp.quantity}
                    </Typography>
										<Typography variant="headline" component="h1">
                      {'Pick up time: ' + this.props.rsvp.pickUpTime}
                    </Typography>
                </Paper>
            </div>
        )
    }
}

ReservationItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ReservationItem);
