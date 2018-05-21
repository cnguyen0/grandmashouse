import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from 'material-ui/transitions/Slide';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TextField from 'material-ui/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask'
import Fade from 'material-ui/transitions/Fade';
import Snackbar from 'material-ui/Snackbar';

import { Carousel } from "react-responsive-carousel";
import Paper from 'material-ui/Paper/Paper';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: 30,
    marginTop: theme.spacing.unit * 3,
  }),
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

class FullScreenDialog extends React.Component {
  state = {
    textmask: '(  )    -    ',
    open: false,
    sbOpen: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, sbOpen: true });
  };

  handleSBClose = () => {
    this.setState({ sbOpen: false });

  };

  render() {
    const { classes } = this.props;
    return (
      <div>
      {!this.props.rsvp && <Button onClick={this.handleClickOpen} variant="raised" color="secondary" className={classes.button}>
          Reserve
        </Button>}
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {this.props.title}
              </Typography>
            </Toolbar>
          </AppBar>

          <div style={{width: '70%', margin: "0 auto"}}>
            <Carousel showArrows={true} dynamicHeight={true} swipeable={true} useKeyboardArrows={true} style={{margin: "0 auto", textAlign:"center"}}>
              {this.props.item.image.map((imgSrc, i) => {
                return (<div><img src={imgSrc} key={i} alt='listing food'/></div>)
              })}
            </Carousel>
          </div>

          <div className="row around-s">
            <div className="col-xs-6">
                <div className="box">
                  <Paper className={classes.root}  elevation={4}>
                    <Typography variant="headline" component="h1">
                      {this.props.item.title + ' | ' + this.props.item.price}
                    </Typography>
                    <Typography variant="headline" component="h1">
                      {this.props.item.city + ', ' + this.props.item.state}
                    </Typography>
                    <Typography component="p">
                      {this.props.item.description}
                    </Typography>
                    <hr />
                    <Typography variant="headline" component="h1">
                      About the Chef
                    </Typography>
                    <img src={this.props.item.chef.img} style={{borderRadius: '50%', width: '75px', float: 'left'}} alt='user avatar' />
                    <Typography variant="headline" component="h1">
                      {this.props.item.chef.firstName + ' ' + this.props.item.chef.lastName}
                    </Typography>
                    <Typography component="p">
                      {this.props.item.chef.bio}
                    </Typography>
                    <br />
                    <hr style={{clear: 'both'}}/>
                    <Typography variant="headline" component="h1">
                      Reviews (0)
                    </Typography>
                    <Typography component="p">
                      Be the first to review!
                    </Typography>
                  </Paper>
                </div>
            </div>
            <div className="col-xs-6">
                <div className="box">
                <Paper className={classes.root}  elevation={4}>
                  <Typography variant="headline" component="h1">
                    Make a Reservation!
                  </Typography>
                  <form className={classes.container} noValidate>
                    <InputLabel>Phone Number</InputLabel>
                    <Input
                      label='Phone Number'
                      value={this.state.textmask}
                      inputComponent={TextMaskCustom}
                      inputlabelprops={{
                        shrink: true,
                      }}
                      required={true}
                    />
                    <br />
                    <br />
                    <TextField
                      id="datetime-local"
                      label="Pick-up time Request"
                      type="datetime-local"
                      defaultValue="2017-05-24T10:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required={true}
                    />
                    <br />
                    <br />
                    <TextField
                      label="Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required={true}
                    />
                  </form>
                  <br />
                  <br />
                  <Button onClick={this.handleClose} variant="raised" color="secondary">Reserve</Button>
                </Paper>
                </div>
            </div>
          </div>
        </Dialog>
        <Snackbar
          open={this.state.sbOpen}
          onClose={this.handleSBClose}
          transition={Fade}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          autoHideDuration={4000}
          message={<span id="message-id">Reservation Request Sent!</span>}
        />
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
