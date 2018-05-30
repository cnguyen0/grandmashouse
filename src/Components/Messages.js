import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '75%',
    margin: 'auto', 
    padding: '50',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  panel1: {
    background: 'linear-gradient(to right, #ffc0cb, #ffb6c0)'
  },
  panel2: {
    background: 'linear-gradient(to right, #6a7eff, #f3daff)'
  }
});


class Messages extends React.Component {
    
  state = {
    expanded: null,
    value1: ''
  };

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({value1: ''});
      var div = document.getElementById('appendhere');
      div.innerHTML += 'You: ' + e.target.value;
    }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} className={classes.panel1} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Mabel Griffin</Typography>
            <Typography className={classes.secondaryHeading}>How were the scones?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Hello! Thank you for buying some scones from me yesterday! How were they? Do you think adding dried fruit would make them better?
            </Typography>
            <div id='appendhere' style={{clear: 'both', display: 'block'}}></div>
            <TextField
              id="full-width"
              label="Reply"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="Hello!"
              fullWidth
              margin="normal"
              value={this.state.value1}
              onChange={(e) => this.setState({value1: e.target.value})}
              onKeyPress={this._handleKeyPress}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} className={classes.panel2} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Terry Beckner</Typography>
            <Typography className={classes.secondaryHeading}>
              New Item! 
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              I see you've visited my shop before. Come try some new items I have for sale! Spring rolls and dumplings :)
            </Typography>
          </ExpansionPanelDetails>
          <TextField
            id="full-width"
            label="Reply"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Hello!"
            fullWidth
            margin="normal"
          />
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} className={classes.panel1} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Grandma's House</Typography>
            <Typography className={classes.secondaryHeading}>
              New chefs near you!
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              More chefs have joined Grandma's house in your area. Check them out!
            </Typography>
          </ExpansionPanelDetails>
          <TextField
            id="full-width"
            label="Reply"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Hello!"
            fullWidth
            margin="normal"
          />
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} className={classes.panel2} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Glenn Tweed</Typography>
            <Typography className={classes.secondaryHeading}>
              Loved the sandwich!
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Thank you very much for lunch yesterday. The reuben sandwich was delicious. 
            </Typography>
          </ExpansionPanelDetails>
          <TextField
          id="full-width"
          label="Reply"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Hello!"
          fullWidth
          margin="normal"
        />
        </ExpansionPanel>
      </div>
    );
  }
}

Messages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Messages);
