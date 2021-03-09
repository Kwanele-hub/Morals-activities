import React from 'react'
import {Link} from 'react-router-dom'

function main() {
  return (
    <div>
      <h1>Thank you</h1>
              <p>We belive in gratitude and appreciation....</p>
              <Link to="./">
              <button className="order_btn" >LOGOUT</button>
              </Link>
    </div>
  )
}

export default main
