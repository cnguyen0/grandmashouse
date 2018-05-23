import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'
import ListingCard from './ListingCard';
import UserAvatarProfile from './UserAvatarProfile';

import { allItems } from './LocalDatabase';

import './App.css';

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

    common = {
        img: "http://2.bp.blogspot.com/-Nluqr5JsqIc/Vk1p5T38BzI/AAAAAAAAE7g/NwVhT3ZMPLA/s1600/CuteAvatar2.png",
        first_name: 'Ruff',
        last_name: 'Dawg'
    }

    common2 = {
        img: 'http://i.imgur.com/IkLetkK.png',
        first_name: 'Hello',
        last_name: 'Kitty'
    }

    render() {
        const { classes } = this.props;
        return (
            <div className='profile-flex'>
                <div className="left-sidebar">
                    {/* side bar, user profile information. contains avatar, name, average rating, bio */}
                    <Paper className={classes.root}  elevation={4}>
                        <img src='http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-ponsy-deer.png' style={{borderRadius: '50%', width: '250px'}} alt='user avatar' />
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

                <div className="right-sidebar">
                    {/* user's latest posts */}
                    <Paper className={classes.root}  elevation={4}>
                        <Typography variant="headline">Recent Posts</Typography>
                        <ListingCard item={allItems[0]} />
                    </Paper>

                    {/* common connection with avatars */}
                    <Paper className={classes.root}  elevation={4}>
                        <Typography variant="headline">Common Connections</Typography>
                        <div className='common-connection-friends'>
                            <div className='common-connection-third'>
                                <UserAvatarProfile user={this.common} />
                            </div>
                            <div className='common-connection-third'>
                                <UserAvatarProfile user={this.common2} />
                            </div>
                            <div className='common-connection-third'>
                                <UserAvatarProfile user={this.common} />
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Profile);