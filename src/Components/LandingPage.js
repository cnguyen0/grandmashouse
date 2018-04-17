import React from 'react';

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <section id="LandBackground" >
                    <div id="LandBackgroundContainer">
                        <div id="LandText">
                            <h1> Grandma's House </h1>
                            <p id="LandBackgroundText"> Connecting people through the love of food </p>
                            <button className="LandButton"> Chef </button>
                            <button className="LandButton"> Eater </button>

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