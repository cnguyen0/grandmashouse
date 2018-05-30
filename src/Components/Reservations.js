import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ReservationItem from './ReservationItem';

import { reservations, allItems } from './LocalDatabase';

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
    getItem(id) {
        return allItems.find(function(itm) { if (itm.id === id) return itm;});
    }

    render() {
        return (
            <div>
                { reservations.length === 0 ? 'You currently have no reservations. Make your first reservations today!' :
                    reservations.map((rsvp, i) => {
                        return (<ReservationItem item={this.getItem(rsvp.listingID)} rsvp={rsvp} />  )
                    })                 
                }
            </div>
        )
    }
}

Reservations.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Reservations);
