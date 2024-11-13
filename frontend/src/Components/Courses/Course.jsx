import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Course.css";
import Footer from "../Footer";
import icon1 from "../../Assets/icon1.png";
import iconThree from "../../Assets/icon1of3.png";
export default function Course() {
	const [sidebarActive, setSidebarActive] = useState(false);

	const toggleSidebar = () => {
		setSidebarActive(!sidebarActive);
	};

	return (
		<div className="course-container">
			<div className="course-header">
				<div className="header-items">EduLearnSync</div>
				<div className="header-items ">Introduction to Cyber Security</div>
				<div className="header-items "><Link to="/performance-dashboard">Performance</Link></div>
				<div className="header-items "><Link to="/leaderboard">Leader Board</Link></div>
				<div className="header-items "><Link to="/course-list">Go Back</Link></div>
				<div className="header-items outline" onClick={toggleSidebar}>
					Course Outline
				</div>
			</div>

			<div className={`course-sidebar ${sidebarActive ? "active" : ""}`}>
			<h3>Course Outline</h3>
				<ul>
					
					<li>
						Module 1:Introduction to Cybersecurity
						<ul>
							<li>
								<Link to="/course-details/1.1">1.1 The World of Cybersecurity</Link>
							</li>
							<li>
								<Link to="/course-details/1.2">1.2 Organizational Data </Link>
							</li>
						</ul>
					</li>
					<li>
						Module 2: Attacks, Concepts and Techniques
						<ul>
							<li>
								<Link to="/course-details/2.1">2.1 Types of Malware</Link>
							</li>
							<li>
								<Link to="/course-details/2.2">2.2 Methods of Infiltration</Link>
							</li>
						</ul>
					</li>
					<li>
						Module 3: Protecting your Privacy
						<ul>
							<li>
								<Link to="/course-details/3.1">3.1 Protecting your Devices and Network</Link>
							</li>
							<li>
								<Link to="/course-details/3.2">3.2 Data Maintainance</Link>
							</li>
						</ul>
					</li>
					<li>
						Module 4: Protecting the Organization
						<ul>
							<li>
								<Link to="/course-details/4.1">4.1 Cybersecurity Devices and Technologies</Link>
							</li>
							<li>
								<Link to="/course-details/4.2">4.2 Behaviour Approach to Cybersecurity</Link>
							</li>
							
						</ul>
						<li> <Link to="/exam">Final Exam</Link></li>
					</li>
				</ul>
			</div>

			<div className={`course-content ${sidebarActive ? "active" : ""}`}>
				<section></section>

				<section className="s0">
					<div className="heading">
						<div>
							<p>1.1 Welcome to the world of Cyber Security</p>
						</div>
					</div>
				</section>
				{/* <section className="s1">
					<div className="s1-container">
						<div className="img">
							<img src={icon1} alt="i" />
						</div>
						<div className="text-refine">
							<p>
								Hi, my name is Guru. Welcome to eLearning company @Apollo. We’re
								delighted to have you on board. The company is in a critical
								growth phase, but we’re worried that we’re susceptible to
								security breaches.
							</p>

							<br />
							<p>
								We’ve seen so many companies fall victim to cybercrime, and we
								don’t want to be next. We need to move quickly and build our
								cybersecurity defenses. Are you ready to help?
							</p>
						</div>
					</div>
				</section>

				<section className="s2">
					<div className="s2-container">
						<div className="text-container">
							<div className="heading1">
								<p>1.1.1 What Is Cybersecurity?</p>
							</div>

							<div className="normal-text">
								<p>
									Cybersecurity is the ongoing effort to protect individuals,
									organizations and governments from digital attacks by
									protecting networked systems and data from unauthorized use or
									harm.
								</p>
							</div>

							<div className="image">
								<img src={iconThree} alt="i" />
							</div>
							<div className="card-container">
								<div className="my-card">
									<p>
										<b>Personal</b>
									</p>
									<p>
										On a personal level, you need to safeguard your identity,
										your data, and your computing devices.
									</p>
								</div>
								<div className="my-card">
									<p>
										<b>Organizational</b>
									</p>
									<p>
										At an organizational level, it is everyone’s responsibility
										to protect the organization’s reputation, data and
										customers.
									</p>
								</div>
								<div className="my-card">
									<p>
										<b>Government</b>
									</p>
									<p>
										As more digital information is being gathered and shared,
										its protection becomes even more vital at the government
										level, where national security, economic stability and the
										safety and wellbeing of citizens are at stake.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section> */}

				{/* <section className="s3">
					
						<div className="s3-container">
						<div className="text-container">
						<div className="heading1">
								{/* <p>1.1.2 Protecting Your Personal Data</p> */}
							{/* </div>
							</div>

						</div>
					
				</section> */} 
{/* 
				<div className="lala">
					<p>ndjkskjs</p>
				</div> */}

		
			</div>
		</div>
	);
}
