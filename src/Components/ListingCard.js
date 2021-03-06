import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ListingDialog from './ListingDialog'

import { favorites } from './LocalDatabase';

const styles = theme => ({
  card: {
    maxWidth: 400,
    textAlign: 'left'
  },
  media: {
    height: 194,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ListingCard extends React.Component {
  state = { 
    liked: favorites.includes(this.props.item)
  };

  handleLiked = () => {
    favorites.push(this.props.item);
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { classes } = this.props;
        
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title={this.props.item.title}
            action={
              <div>
                <div style={{display: 'inline-block'}}>
                <ListingDialog
                  rsvp={this.props.rsvp}
                  item={this.props.item}
                />
                </div>
                <div style={{display: 'inline-block'}}>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon style={{color: this.state.liked ? 'red' : ''}} onClick={this.handleLiked}/>
                </IconButton>
                </div>
              </div>
            }
          />
          <CardMedia
            className={classes.media}
            image={this.props.item.image[0]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {this.props.item.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

ListingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingCard);
