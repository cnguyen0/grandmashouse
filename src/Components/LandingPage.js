import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import FAQ from './FAQ.js';



const LearnMoreChef = props => <Link to="/learnmore-homechef" {...props} />
const LearnMoreEater = props => <Link to="/learnmore-eater" {...props} />

const styles = theme => ({
    cSquare: {
        borderRadius: '50%',
        width: '5%',
        height: '5%',
        padding: '1%',
    },

  });

class LandingPage extends React.Component {

    //Aindra: idk how to comment in render function. But lines 24:29 are how we implement a button from amterial-ui.
    //note the import at the top. The component piece refers to the variables i set in line 5:6. You can look at Main.js
    // if you want to learn the routing thing. I figured it out in a few minutes, its not super complicated so you'll catch on
    // quick too. lmk if you need help. You'll have to mess with styling or read up documentation to make the buttons I put look
    // prettier. There is no padding.
    render() {
        return (
            <div>
                <section id="LandBackground" >
                    <div id="LandBackgroundContainer">
                        <div id="LandText">
                            <h1> Grandma&#x27;s House </h1>
                            <p id="LandBackgroundText"> The most important ingredient is love </p>

                            <Button variant="raised" color="primary" component={LearnMoreChef}>
                                Chef
                            </Button>
                            <Button variant="raised" color="primary" component={LearnMoreEater}>
                                Eater
                            </Button>

                        </div>
                    </div>
                </section>
                <section id="LandAbout">
                    <div className="fa-home-con">
                        <i className="fas fa-home"></i>
                    </div>
                    <h2> About Us </h2>
                    <p id="AboutText"> Grandma’s House provides a platform for two communities, Chefs and Eaters, to meet. Home chefs share their love of cooking, decide their own work hours, and benefit from additional income. Eaters get to experience new cuisines prepared by their local neighbors.
Grandma’s House fosters a greater sense of community, because when it comes to food, love is the most important ingredient.
</p>
                </section>
                <section id="OurValuesSection">
                    <div className="fa-utensils-con">
                        <i className="fas fa-utensils"></i>
                    </div>                
                    <h2>Our Values</h2>
                    <p style={{fontSize: '20px'}}>Here at Grandma's House, we strongly believe in cultivating and empowering local communities. By doing so, we care a lot in the home chefs who sign up on our platform by protecting them from harm and ensuring they are earning profit in what they love. We created a donation system to ensure not only chef are getting their money, but eaters are able to pay more if they believe service and food quality is exceptional. Our home chefs are what ties the community together so it is important to keep our chefs safe.</p>  
                </section>
                <section id="team">
                    <div className="fa-home-con">
                        <img className={this.props.classes.cSquare} src={require('../img/Royboy.jpg')} style={{width:"40%", height:"40%",}}/>
                        <img className={this.props.classes.cSquare} src={require('../img/Aindra.jpg')} style={{width:"40%", height:"40%",}}/>
                        <img className={this.props.classes.cSquare} src={require('../img/Maxwell.jpg')} style={{width:"40%", height:"40%",}}/>
                        <img className={this.props.classes.cSquare} src={require('../img/Cindy.jpg')} style={{width:"40%", height:"40%",}}/>
                    </div>

                    <h2> The Team </h2>
                    <p id="teamtxt"> 
                        We are seniors at the University of Washington's Information School! From left to right, top to bottom, we are 
                        Royce, Aindra, Max, and Cee! We're all dedicated and passionate about making a difference through the lens of technology.
                        We decided to develop Grandma's House because we reccognized an opportunity to unite people from all different backgrounds
                        through a mutual love for food! 
                    </p>
                    <div style={{clear: 'both'}}></div>
                    <div >
                        {/* <img className={this.props.classes.cSquare} src={require('../img/Royboy.jpg')}/>
                        <img className={this.props.classes.cSquare} src={require('../img/Aindra.jpg')}/>
                        <img className={this.props.classes.cSquare} src={require('../img/Maxwell.jpg')}/>
                        <img className={this.props.classes.cSquare} src={require('../img/Cindy.jpg')}/> */}
                    </div>
                </section>
                <section id="FAQSection">
                    <FAQ />
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(LandingPage);
