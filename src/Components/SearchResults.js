import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListingCard from './ListingCard';
import Typography from 'material-ui/Typography/Typography';
import { allItems } from './LocalDatabase';
import MyMapComponent from './MyMapComponent.js';
// ROUTE localhost:3000/search?


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
	},
	searchMap: {
		clear: "both"
	},
	rowC: {
			display:'flex', 
			flexDirection:'row'}
});


class SearchResults extends React.Component {
	state = { results: [] };

	componentWillMount = () => {
		// http call to see how many there are there are!
		// probably some sort of sorting method that queries hella results.
		let final = [];
		allItems.forEach(item => {
			if (item.title.toLowerCase().includes(this.props.query.toLowerCase())) {
				final.push(item);
			}
		});
		this.setState({results: final});
	}

	render() {
		return (
			<div>
				<div style={{margin: '20px'}}>
						<Typography variant="headline" component="h1" style={{marginBottom: '20px'}}>Search Results for: {this.props.query || "Pasta"}</Typography>
						<div className="row around-s">
						{
							this.state.results.length < 1 ? "No results in your search." : this.state.results.map((result, i) => {return(
								<div className="col-xs-4">
									<div className="box">
											<ListingCard item={result} key={i}/>
									</div>
								</div>
							)})
						}
										<div style={{float:'left', position:'relative', right:'-8px', top:'-8px'}}><MyMapComponent /> </div>
										<div style={{marginBottom: '800px'}}></div>
						</div>
				</div>
			</div>
		)
	}
}

SearchResults.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResults);