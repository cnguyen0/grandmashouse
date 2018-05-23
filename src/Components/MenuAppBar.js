import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Search from './Search';

import { loggedIn } from './LocalDatabase';

const SignIn = props => <Link to="/signin" {...props} />
const Reservations = props => <Link to="/reservations" {...props} />
const Messages = props => <Link to="/messages" {...props} />
const Favorites = props => <Link to="/favorites" {...props} />
const SignUp = props => <Link to="/signup" {...props} />
const Profile = props => <Link to="/profile" {...props} />
const MyAccount = props => <Link to="/myaccount" {...props} />

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: loggedIn.auth,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
    loggedIn.auth = !loggedIn.auth;
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              <a id='HomeBtn' href='/'>Grandma&#39;s House</a>
            </Typography>
            <Search className={classes.search} />
            <Button variant="raised" color="primary" className={classes.button} component={Favorites}>
              Favorites
            </Button>
            <Button variant="raised" color="primary" className={classes.button} component={Reservations}>
              Reservations
            </Button>
            <Button variant="raised" color="primary" className={classes.button} component={Messages}>
              Messages
            </Button>
            <Button variant="raised" color="secondary" className={classes.button} component={SignUp}>
              Become a Chef
            </Button>
            { !this.state.auth && <Button variant="raised" color="secondary" className={classes.button} component={SignIn}>
                Sign In
              </Button>
            }
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem component={Profile}>Profile</MenuItem>
                  <MenuItem component={MyAccount}>My account</MenuItem>
                  <MenuItem onClick={this.handleChange}>Log off</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
