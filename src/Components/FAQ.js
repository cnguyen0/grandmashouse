import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// ROUTE localhost:3000/FAQ
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function FAQ(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="title" color="inherit">
        Frequently Asked Questions
      </Typography>
      <br/>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>1. Is this safe?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Grandma&#x27;s House is a meet up platform for Food Lovers and Home Chefs. We help faciliate the process of Home Chefs being compensated
            for their hard work! However, whenever you meet with anybody that you are not familiar with, you should proceed with caution. We help to
            reduce the fear and stigma of meeting up with strangers with our 'Review' system. Check out your Chef&#x27;s rating and reviews to get
            yourself feeling more comfortable. Same goes for Chef&#x27;s when accepting a reservation!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>2. How do I meet up with a chef? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Schedule a reservation time to pick up your meal! The Chef will have your food ready by that time. You can coordinate your pick up with our Messaging
            or contact your Home-Chef directly. You will receive text updates about your meal so that you can enjoy it as soon as it&#x27;s ready!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>3. What does recommended donation value mean? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            As our platform does not currently charge any fees for our users, Home-Chefs get to exchange their
            services for a donation from patrons like you! Home-Chefs will set a minimum donation amount to
            cover ingredient and labor costs. You can always give more! You are welcome to show your appreciation
            by adding a little something extra after enjoying your meal. We always encourage donating a little more
            if you can! Think of it like contributing a little money to a potluck so you can get in on some
            awesome food!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>4. How do Chefs get paid? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Home-Chefs will get paid directly by patrons like you! Donations go directly to them to cover the costs
            involved in cooking. We want to make sure Home-Chefs can continue to cook with all their love. Your efforts
            help to make dreams happen!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>5. What does my rating mean? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Your rating is based on your behavior and perception of you in the community. The more friendly and cooperative
            you are, you&#x27;ll be more likely to be accepted for reservations from the top Home-Chefs in your community!
            Home-Chefs are given a rating based on their food and service as well. Hospitality is a 2-way street!
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>6. I missed my pick-up time. What do I do?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Contact your Home-Chef and communicate when you will be able to pick up your meal. Grandma would never want you
            to be missing any meals! Coordinate directly with the Home-Chef. Try to be courteous and understandable to everyone.
            If you continue to miss pick-ups, your rating may decrease and could prevent you from participating in this community.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>7. I did not receive my meal. What do I do? </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Contact your Home-Chef directly. If you could not receive a response, then you can contact us at help@grandmashouse.com.
            Unfortunately, life just happens. We will investigate and get you a reimbursement for your meal. Be sure to leave a review
            after to help out community maintain quality service. If a Home-Chef misses too pick-ups, they will be removed from the platform.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

FAQ.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FAQ);
