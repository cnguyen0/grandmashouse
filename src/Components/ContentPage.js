import React from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      margin: 50,
      marginTop: theme.spacing.unit * 3,
    }),
});

class ContentPage extends React.Component {

    readTxtFile = (file) => {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", file, false);
        xmlhttp.send();
        return {__html: xmlhttp.responseText};
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root}  elevation={4}>
                    <Typography variant="headline" component="h1">
                        {this.props.title}
                    </Typography>
                    <Typography>
                    <div dangerouslySetInnerHTML={this.readTxtFile(this.props.txtFile)}>
                    </div>
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ContentPage);