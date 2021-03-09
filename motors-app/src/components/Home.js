import React from 'react'
import { Link }from 'react-router-dom'

function Home() {
    return (
        <div>
    <h1>SPHE MOTORS ...</h1>
    <h2>Have your work done here and you’ll never go anywhere else again.</h2>
    {/* <Link to="/register">
    <button >Register Car</button>
    </Link>        */}
    <Link to="loginForm">
    <button>Purchase Car</button>
    </Link>  
    <br></br>
    <img src='https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374448_960_720.jpg' alt="logo" />
        </div>
    )
}

export default Home

