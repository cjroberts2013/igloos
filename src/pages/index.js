import React from 'react';
import ig1 from './../images/igloo.jpg';
import ig2 from './../images/igloo2.webp'
import ig3 from './../images/igloos-3.jpg';
import ig4 from './../images/igloo-real-tools_h.jpg'

const Home = () => {
    const style = {
        width: '100%'
    }

    return (
        <div style={style}>
            <h1>Have you every asked yourself, what is an igloo?</h1>
            <h2>Well today we are going to answer that glorious question.</h2>
            <br/>
            <br/>
            <h3>Below is a wonder excerpt from the well know site Britannica about how to build and igloo. You can find the full article <a href="https://www.britannica.com/technology/igloo">HERE</a></h3>
            <p>To build the igloo, the builder takes a deep snowdrift of fine-grained, compact snow and cuts it into blocks with a snow knife, a swordlike instrument originally made of bone but now usually of metal. Each block is a rectangle measuring about 2 feet by 4 feet (60 cm by 120 cm) and 8 inches (20 cm) thick. After a first row of these blocks has been laid out in a circle on a flat stretch of snow, the top surfaces of the blocks are shaved off in a sloping angle to form the first rung of a spiral. Additional blocks are added to the spiral to draw it inward until the dome is completed except for a hole left at the top for ventilation. Joints and crevices are filled with loose snow. A clear piece of ice or seal intestine is inserted for a window. </p>
            <br/>
            <h3>As any sane person would agree, igloos are made with blocks of ice/snow and never by digging out the center of a snow pile. Only a maniac would do it that way.</h3>
            <br/><br/>
            <h3>Anyways, here are a few pictures of some CORRECTLY made igloos</h3>
            <img src={ig1} style={style} alt="igloo 1"/>
            <br/>
            <img src={ig2} style={style} alt="igloo 2"/>
            <br/>
            <img src={ig4} style={style} alt="igloo 4"/>
            <br/>
        </div>
    );
}

export default Home;
