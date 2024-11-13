import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

export default function Header() {
	return (
		<div>
			<div className="header">
				<div className="left">
					<i class="fa fa-rss" aria-hidden="true">
						&nbsp;
					</i>
					EduLearnSync
				</div>
				<div className="right">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
