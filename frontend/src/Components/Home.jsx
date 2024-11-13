import React from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Contact from "./Contact";
import L1 from "../Assets/L1.png";
import L2 from "../Assets/L2.png";
import L3 from "../Assets/L3.png";
import L4 from "../Assets/L4.png";
import Footer from "./Footer";
import Header from "./Header";
import Left from "../Assets/left.png"
import Right from "../Assets/right.png"


//for now since we dont have login or signup logic we directly paste Mainpage in app.js as and when needed

// 1. **Authenticity:**
//    - EduCollabHub ensures the authenticity of educational content through rigorous verification processes led by subject matter experts, fostering trust and reliability among users.

// 2. **Community Engagement:**
//    - The platform promotes active participation and collaboration among students, creating a vibrant community where knowledge sharing is encouraged and celebrated.

// 3. **Innovation:**
//    - EduCollabHub embodies innovation by providing a dynamic space where students can explore diverse learning materials in various formats, embracing creativity and adaptability.

// 4. **User-Friendly Interface:**
//    - With intuitive navigation and interactive features, EduCollabHub offers a seamless and enjoyable user experience, making learning engaging and accessible to all.

export default function Home() {
	return (
		<div>
			<Header />
			<div className="img-section">
			<div className="text">
			<p><strong>EduLearnSync</strong></p>
			<p>EduLearnSync: Learn Together, Level Up Forever</p>
			</div>
			</div>
			<div className="home ">
				<h1>EduLearnSync</h1>
				<h5>EduLearnSync: Learn Together, Level Up Forever</h5>
			

				
				<div className="container" >
				<div >
                   
				   <div className="row  home-card">
					   <div className="col-md-6  ">
							   <h1 className="bold" >Learn, Collaborate, Innovate</h1><br/>
							   <p>Unleashing Potential Through Collaboration,Empowering Education Together</p>
							   <ul className="lists-boxes">
								   <li><i className="fa fa-check all-icons col" aria-hidden="true"></i>Engaging Learning </li>
								   <li><i className="fa fa-check all-icons col" aria-hidden="true"></i>Learn and practice through one platform</li>
								   <li><i className="fa fa-check all-icons col" aria-hidden="true"></i>Collaboration</li>
								   <li><i className="fa fa-check all-icons col" aria-hidden="true"></i>Connect with the community</li>
							   
								 </ul>
					   </div>
					   <div className="col-md-6 ">
						   <img src={Left} alt="a"/>
					   </div>
				   </div>
			   </div>


			   <div >

				<div className="space"></div>
                   
				   <div className="row  home-card">
				   <div className="col-md-6 ">
						   <img src={Right} alt="a"/>
					   </div>
					   <div className="col-md-6  ">
							   <h1 className="bold" >Learn, Collaborate, Innovate</h1><br/>
							   <p>Unleashing Potential Through Collaboration,Empowering Education Together</p><br/>
							   <ul className="lists-boxes">
								   <li><i className="fa fa-check all-icons col" aria-hidden="true"></i>Engaging Learning </li>
								   <li><i className="fa fa-check all-icons col" aria-hidden="true"></i>Learn and practice through one platform</li>
								   <li><i className="fa fa-check all-icons col" aria-hidden="true"></i>Collaboration</li>
								   <li><i className="fa fa-check all-icons col" aria-hidden="true"></i>Connect with the community</li>
							   
								 </ul>
					   </div>
					 
				   </div>
			   </div>

			   <div className="space"></div>
					<div className="row">
					<div className="left-space"></div>
						
						<div
							class="card card-img col-md-3 shadow-sm p-3 mb-5"
							style={{ margin: "30px", width: "21rem" }}
						>
							<img src={L1} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Authenticity</h5>
								<p class="card-text ">
									We ensure the authenticity of educational content through
									verification processes led by experts
								</p>
							</div>
						</div>

						<div
							class="card card-img col-md-3 shadow-sm p-3 mb-5"
							style={{ margin: "30px", width: "21rem" }}
						>
							<img src={L2} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Community Engagement</h5>
								<p class="card-text ">
									We endorse active participation and collaboration among
									students
								</p>
							</div>
						</div>
						<div className="col-md-3"></div>
					</div>


					

					<div className="row">
						<div className="left-space"></div>
						<div
							class="card card-img col-md-3 shadow-sm p-3 mb-5 "
							style={{ margin: "30px", width: "21rem" }}
						>
							<img src={L3} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Innovation</h5>
								<p class="card-text ">
									Innovation creativity and adaptability. Our Moto!
								</p>
							</div>
						</div>

						<div
							class="card card-img col-md-3 shadow-sm p-3 mb-5"
							style={{ margin: "30px", width: "21rem" }}
						>
							<img src={L4} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">User-Friendly Interface</h5>
								<p class="card-text">
									With intuitive navigation and interactive features, we offer a
									fun experience!
								</p>
							</div>
						</div>
						<div className="col-md-3"></div>
					</div>

					<h2>About Us</h2>
					<div className="about-us">
						<p>
							At EduLearnSync, we believe in the transformative power of
							collective intelligence, where students from diverse backgrounds
							converge to shape the future of education. Our platform is
							designed to foster a global community of learners, empowering
							individuals to share, discover, and collaborate on authentic
							educational content.
						</p>
						<p>
							Led by subject matter experts, we ensure the reliability of
							materials, creating a trustworthy space for academic enrichment.
							Join us on this educational journey where innovation meets
							collaboration. EduLearnSync is more than a platform; it's a
							dynamic space where your ideas and contributions shape the
							landscape of learning. Let's collaborate, learn, and inspire
							together at EduCollabHub!
						</p>

						<p>
							In the dynamic landscape of education, the advent of digital
							platforms has redefined the way students engage with learning
							materials. Recognizing the need for a collaborative and innovative
							space, we endeavor to create a comprehensive online platform that
							facilitates the seamless exchange of educational content among
							students.{" "}
						</p>

						<p>
							This initiative aims to harness the collective knowledge of the
							student community by enabling the creation, sharing, and
							evaluation of diverse learning resources in the forms of videos,
							pictures, text, and audio. As students navigate through their
							academic journeys, the abundance of information available can be
							overwhelming. EduLearnSync seeks to address this challenge by
							providing a curated space where subject matter experts
							authenticate and validate the educational material before it is
							shared with the wider community.{" "}
						</p>

						<p>
							This not only ensures the credibility of the content but also
							fosters a trustworthy environment for collaborative learning. The
							platform goes beyond traditional modes of learning by
							incorporating interactive features such as upvoting, downvoting,
							and commenting on posts.{" "}
						</p>

						<p>
							This not only allows users to express their opinions on the
							quality of content but also encourages meaningful discussions and
							knowledge-sharing within the community. To enhance the user
							experience, content is organized into categories, making it easier
							for students to discover relevant materials aligned with their
							academic interests.
						</p>

						<p>
							Through EduLearnSync, we envision a global network of students
							collaboratively contributing to a repository of authentic and
							diverse educational resources.{" "}
						</p>
					</div>
					<br />
					<Slider />

					<iframe
						className="video "
						src="https://www.youtube.com/embed/1yT-wTBZuPI?si=ag5kz85kCBcp-hIA"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
					<Contact />
				</div>
			</div>
			<Footer />
		</div>
	);
}
