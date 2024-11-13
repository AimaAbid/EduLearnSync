// import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <footer className='' id=''>

        <div className="heading-footer">
            <span style={{'color':'#333'}}>EduLearn </span>
            <span style={{'color':'#5cad3d'}}>Sync</span>
		</div>

	  <ul className="all">
	  	<li><Link to="">Help</Link></li>
	  	<li><Link to="">Blogs</Link></li>
      
	  </ul>

      <ul className="all">
	  	<li><Link to="">Login</Link></li>
	  	<li><Link to="">Sign Up</Link></li>
	  	
	  </ul>

      <ul className="all">
	  	<li><Link to="">Whats New!</Link></li>
	  	<li><Link to="">Posts</Link></li>
	  	
	  </ul>

    <ul className="all">
	  	<li><Link to="">EduSkillSync</Link></li>
	  	<li><Link to="">&copy; 2024</Link></li>
	  	
	  </ul>

    
	
       <p className='text-center footer-bottom'>&copy; 2024 Education Platform. All rights reserved.</p>
    </footer>
  )
}


