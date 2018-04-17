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
        title: 'Beyonce'
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="box">
                                <Typography variant="headline" component="h1">
                                    Favorites
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div class="row around-s">
                        <div class="col-xs-4">
                            <div class="box">
                                <ListingCard usersFave={this.usersFave} />
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="box">
                                <ListingCard usersFave={this.usersFave} />
                            </div>
                        </div>
                        <div class="col-xs-4">
                            <div class="box">
                                <ListingCard usersFave={this.usersFave} />
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