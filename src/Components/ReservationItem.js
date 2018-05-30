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
			width: '150px',
			height: '150px',
      borderRadius: '50%', 
      top: '50%',
      left: '50%',
      margin: 'auto'
		}
});


// TODO: MAKE PRETTY!!!
class ReservationItem extends React.Component {
    fixTime(time) {
      let newDate = new Date(time);
      var options = {  
        weekday: "long", year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"  
      };  
      return newDate.toLocaleDateString("en-US", options);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <div style={{width: '15%', float: 'left', display: 'block', textAlign: 'center'}}>
                      <img src={this.props.item.image[0]} className={classes.rsvpImg} alt='food item one' />
										</div>
                    <div style={{width: '85%', float: 'right'}}>
                      <Typography variant="headline" component="h1">
                        {this.props.item.title}
                      </Typography>
                      <Typography variant="subheading">
                        {this.props.item.city + ', ' + this.props.item.state + ' ' + this.props.item.zip}
                      </Typography>
                      <Typography variant="body1" component="h1">
                        {'Total: $' + (this.props.rsvp.quantity * this.props.item.price)}
                      </Typography>
                      <Typography variant="body1" component="h1">
                        {'Quantity: ' + this.props.rsvp.quantity}
                      </Typography>
                      <Typography variant="body1" component="h1">
                        {'Pick up time: ' + this.fixTime(this.props.rsvp.pickUpTime)}
                      </Typography>
                    </div>
                    <div style={{clear: 'both'}}></div>
                </Paper>
            </div>
        )
    }
}

ReservationItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ReservationItem);
