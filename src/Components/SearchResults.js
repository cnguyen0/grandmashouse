import React from 'react';
import ListingCard from './ListingCard';
import Typography from 'material-ui/Typography/Typography';

// ROUTE localhost:3000/search?
class SearchResults extends React.Component {
	state = { results: [] };

	componentWillMount = () => {
		// http call to see how many there are there are!
		// probably some sort of sorting method that queries hella results.
		this.setState({results: allItems})
	}

	render() {
		return (
				<div style={{margin: '20px'}}>
						<Typography variant="headline" component="h1">Search Results for: {this.props.searchParams || "Pasta"}</Typography>
						{
							this.state.results.length < 1 ? "No results in your search." : this.state.results.map((result) => {return(
								<ListingCard item={result} />
							)})
						}
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

export default SearchResults