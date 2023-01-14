import React from 'react'
import {Link} from "react-router-dom"
import "./Style.css";






function ErrorPage() {
  return (
    <div className='Error-page'>
      <h1>This Page Is Not Found</h1>
      <button>
        <Link to="/home" >Go Home</Link>
      </button>
       
    </div>
  )
}

export default ErrorPage;