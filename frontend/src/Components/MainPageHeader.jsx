import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


export default function MainPageHeader() {
  return (
    <div>
        	<div className="header">
				<div className="left">
					<i class="fa fa-rss" aria-hidden="true">
						&nbsp;
					</i>
					EduLearnSync
				</div>
				<div id="right">
					<ul>
					
						<li>
							<Link to="/course-list">Courses!</Link>
						</li>
						<li>
							<Link to="/main-page">Go Back</Link>
						</li>
						
						
						
						<li >
							<Link to="/user" ><i class="fa fa-user-circle" aria-hidden="true" ></i></Link>
						</li>
					</ul>
				</div>
			</div>
    </div>
  )
}
