import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListingCard from './ListingCard';
import Typography from 'material-ui/Typography/Typography';

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
	}
});


class SearchResults extends React.Component {
	state = { results: [] };

	componentWillMount = () => {
		// http call to see how many there are there are!
		// probably some sort of sorting method that queries hella results.
		this.setState({results: allItems});
	}

	render() {
		return (
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
						</div>
				</div>
		)
	}
}

const allItems = [
	{
		title: 'Shrimp Pasta',
		image: "https://img.sndimg.com/food/image/upload/w_896,h_504,c_fill,fl_progressive,q_80/v1/img/recipes/14/81/72/vNuD41wlTe4jnwh8XngJ_Food-com-2017-05-311586.jpg"
	},
	{
		title: 'Garlic Pasta',
		image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/2/22/0/FNK_spaghetti-with-oil-and-garlic_s4x3.jpg.rend.hgtvcom.616.462.suffix/1487778382137.jpeg"
	}
]

SearchResults.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResults);