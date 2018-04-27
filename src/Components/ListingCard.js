import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import Button from 'material-ui/Button';
import ListingDialog from './ListingDialog'

const styles = theme => ({
  card: {
    maxWidth: 400,
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
  state = { liked: false };

  handleLiked = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon style={{color: this.state.liked ? 'red' : ''}} onClick={this.handleLiked}/>
              </IconButton>
            }
            title={this.props.usersFave.title}
          />
          <CardMedia
            className={classes.media}
            image={this.props.usersFave.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              Not quite sure what to put in this space. I wanted it to be empty but it makes the cards smaller
              and I dont like that at all. So I was thinking we can perhaps add more information or description
              from the favorites you know?
            </Typography>
            <ListingDialog
              title={this.props.usersFave.title}
              details="Not quite sure what to put in this space. I wanted it to be empty but it makes the cards smaller
              and I dont like that at all. So I was thinking we can perhaps add more information or description
              from the favorites you know?"
              image={this.props.usersFave.image}
            />
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
