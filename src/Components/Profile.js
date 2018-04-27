import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { IconButton } from 'material-ui'
// import { ToggleStar, ToggleStarBorder } from 'material-ui/svg-icons'
import { colors } from 'material-ui/styles'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        margin: 50,
        marginTop: theme.spacing.unit * 3,
        textAlign: 'center'
    })
});

// ROUTE localhost:3000/profile
class Profile extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root}  elevation={4}>
                    <img src='http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png' style={{borderRadius: '50%', width: '250px'}}/>
                    <Typography variant="headline">Grandma Betty</Typography>
                    <hr />
                    <Typography variant="title">Bio</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    <hr />
                    <Typography variant="title">Overall Rating</Typography>
                    {/* TODO: show accurate rating rather than black stars */}
                    <FontAwesomeIcon icon={faStar} size='2x'/>
                    <FontAwesomeIcon icon={faStar} size='2x'/>
                    <FontAwesomeIcon icon={faStar} size='2x'/>
                    <FontAwesomeIcon icon={faStar} size='2x'/>
                    <FontAwesomeIcon icon={faStar} size='2x'/>
                </Paper>
            </div>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Profile);