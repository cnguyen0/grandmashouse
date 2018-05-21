import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ListingCard from './ListingCard';
import { favorites } from './LocalDatabase';

// ROUTE localhost:3000/favorites

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      margin: 50,
      marginTop: theme.spacing.unit * 3,
    //   display: 'flex',
    //   flexWrap: 'wrap',
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

class Favorites extends React.Component {
    usersFave = {
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
            img: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png'
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <div className="row around-s">
                        <div className="col-xs-12">
                            <div className="box">
                                <Typography variant="headline" component="h1">
                                    Favorites
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="row around-s">
                    { favorites.length === 0 ? 'You currently have no favorites. View more food posts to add to your favorites!' :
                        favorites.map((fave, i) => {
                            return (
                                <div className="col-xs-4">
                                <div className="box">
                                    <ListingCard item={fave} />
                                </div>
                            </div>
                            )
                        })                 
                    }
                    </div>
                </Paper>
            </div>
        )
    }
}

Favorites.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Favorites);
