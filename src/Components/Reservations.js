import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ReservationItem from './ReservationItem';

// ROUTE localhost:3000/reservations

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      margin: 50,
      marginTop: theme.spacing.unit * 3,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    }),
    gridList: {
        width: 500,
        height: 450,
    },
      subheader: {
        width: '100%',
    }
});

class Reservations extends React.Component {
    userFave = {
        id: 1,
        title: 'Garlic Pasta',
        image: ["https://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/14/81/72/vNuD41wlTe4jnwh8XngJ_Food-com-2017-05-311586.jpg", "https://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/14/81/72/vNuD41wlTe4jnwh8XngJ_Food-com-2017-05-311586.jpg"],
        description: 'Not quite sure what to put in this space. I wanted it to be empty but it makes the cards smaller and I dont like that at all. So I was thinking we can perhaps add more information or description from the favorites you know?',
        price: '$10',
        city: 'Seattle',
        state: 'WA',
        zip: 98105,
        chef: {
            firstName: 'Frank',
            lastName: 'Tomato',
            bio: 'This is my bio and I have been cooking for this many years and so forth.',
            img: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png',
            phoneNumber: 1111111111
        }
    }

    rsvpItem = {
        quantity: 1,
        pickUpTime: 'idk time format',
        price: '$10',
        listingID: 1
    }

    render() {
        return (
            <div>
                <ReservationItem item={this.userFave} rsvp={this.rsvpItem} />
            </div>
        )
    }
}

Reservations.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Reservations);
