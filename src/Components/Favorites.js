import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import ListingCard from './ListingCard';

// ROUTE localhost:3000/favorites

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

class Favorites extends React.Component {
    usersFave = {
        title: 'Beyonce',
        image: "https://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/14/81/72/vNuD41wlTe4jnwh8XngJ_Food-com-2017-05-311586.jpg"
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                                <Typography variant="headline" component="h1">
                                    Favorites
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className="row around-s">
                        <div className="col-xs-4">
                            <div className="box">
                                <ListingCard item={this.usersFave} />
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="box">
                                <ListingCard item={this.usersFave} />
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="box">
                                <ListingCard item={this.usersFave} />
                            </div>
                        </div>
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
