import React from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

const LearnMoreChef = props => <Link to="/learnmore-homechef" {...props} />
const LearnMoreEater = props => <Link to="/learnmore-eater" {...props} />

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
                    <h2> About Us </h2>
                </section>

            </div>
        )
    }
}

export default LandingPage
