import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function DashHeader() {
	return (
		<div>
			<div className="dash-header">
                <div className="both" id="left">
                    Dashboard

                </div>

                 <div className="both" id="dash-right">
                    <Link to="/">Logout!</Link>

                </div>
			
			</div>
		</div>
	);
}
