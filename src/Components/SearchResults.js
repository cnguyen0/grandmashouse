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
	},
	{
		title: 'Sausage-Cream Cheese Crescents',
		image: "https://images-gmi-pmc.edge-generalmills.com/180d426c-7623-40e8-8450-a0bc9531aadc.jpg"
	},
	{
		title: 'Loaded Nachos',
		image: "https://www.seriouseats.com/recipes/images/2017/06/20170627-summer-nachos-matt-clifton-1-1500x1125.jpg"
	},
	{
		title: 'Chicken and Prosciuto Parmigiana',
		image: "https://img.taste.com.au/UCkD8VfP/w1200-h630-cfill/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg"
	},
	{
		title: 'Chicken Paprikash',
		image: "https://static01.nyt.com/images/2017/08/02/dining/02COOKING_CHICKENPAPRIKASH2/02COOKING_CHICKENPAPRIKASH2-articleLarge.jpg"
	},
	{
		title: 'Vegan Tacos',
		image: "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_auto/v1/hellofresh_s3/image/5abd494fae08b54b610ca122-8bfc3c25.jpg"
	},
	{
		title: 'Spaghetti Pie Casserole',
		image: "https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/Spaghetti-Pie-Casserole_exps161692_TH2379807A10_31_9bC_RMS.jpg"
	},
	{
		title: 'Eggplant and Mushroom Polenta',
		image: "https://www.chowstatic.com/assets/recipe_photos/30272_polenta_eggplant.jpg"
	},
	{
		title: 'Buffalo Tacos',
		image: "https://images.meredith.com/content/dam/bhg/Images/recipecq/2013/03/RU175118.jpg.rendition.largest.jpg"
	},
	{
		title: 'Chow Mein',
		image: "https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201204-xl-asian-noodles-with-roast-pork.jpg?itok=tD2V7uuj"
	},
	{
		title: 'Chinese-style braised beef',
		image: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--513504_11.jpg?itok=Gkofqc7N"
	},
	{
		title: 'Cantonese Roast Pork',
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrnaD4LJCq-mpA3AQevmsGV8fx9LN6KzzVb6j_lJ35_3j4TcNV"
	},
	{
		title: 'Egg Rolls',
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrqjT2bJMmB-ZfjZ0RunrRwTJr45pn2vMnHbWn4d3iumz_Nrj"
	},
	{
		title: 'Traditional Spanish Paella',
		image: "https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F00%2F05%2Fspanish-paella-mr-x.jpg%3Fitok%3D4NggY0gG&w=700&q=85"
	},
	{
		title: 'Buffalo Wings',
		image: "https://www.chowstatic.com/assets/2014/09/28068_buffalo_chicken_wings.jpg"
	},
	{
		title: 'Better-Than-Your-Grandma Cookies',
		image: "https://d2gk7xgygi98cy.cloudfront.net/6-3-large.jpg"
	}

]

SearchResults.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResults);