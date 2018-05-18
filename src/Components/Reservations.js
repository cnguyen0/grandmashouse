import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';
import Paper from 'material-ui/Paper/Paper';
import ListingCard from './ListingCard';


const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      margin: 50,
      margin: theme.spacing.unit * 2,
    }),
});

// ROUTE localhost:3000/reservations
class Reservations extends React.Component {
    usersFave = {
        title: 'Beyonce',
        image: "https://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/14/81/72/vNuD41wlTe4jnwh8XngJ_Food-com-2017-05-311586.jpg"
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Paper className={classes.root}  elevation={4}>
                    <Typography variant="headline" component="h1">Your current reservations</Typography>
                    <ListingCard item={this.usersFave} rsvp={true}/>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Reservations);