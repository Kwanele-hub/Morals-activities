import React from 'react'
import { Link }from 'react-router-dom'

function Home() {
    return (
        <div>
    <h1>SPHE MOTORS ...</h1>
    <h2>Quick. Easy. Simple. Sell your car today with immediate payment.
.</h2>
    <Link to="/register">
    <button >Buy A Car</button>
    </Link>       
    <Link to="loginForm">
    <button>Sell A Car</button>
    </Link>  
    <br></br>
    
    
    {/* <img src="https://www.webuycars.co.za/static/media/logo.4c9be247.svg" /> */}
        </div>
    )
}

export default Home
