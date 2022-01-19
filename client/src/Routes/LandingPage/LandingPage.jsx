import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="canvas" style={{backgroundImage:"url('../../LPage.jpg')"}}>
            <img id="logo" src="../../LogoKWH.png" alt="" />
            <h1 id="title">Find your next home!</h1>
            <Link to={"/properties"}><button className="btn">Find all properties</button></Link>
        </div>
    )
}

export default LandingPage;

