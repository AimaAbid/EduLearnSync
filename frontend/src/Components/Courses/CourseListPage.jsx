import React from "react";
// import Header from "../Header";
import Footer from "../Footer";
import Cyber from "../../Assets/unnamed.jpg";
import ML from "../../Assets/Post.jpg";
import ML2 from "../../Assets/ML2.jpg";
import MainPageHeader from "../MainPageHeader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CourseListPage.css"; // Add this line to import CSS
import ReactImg from "../../Assets/reactjs.jpg"
import NodeImg from "../../Assets/nodejs.png"

export default function CourseListPage() {
	var navigate = useNavigate();

	var [courses, setCourses] = useState([]);
	useEffect(() => {
		getCourses();
	}, []);
	return (
		<div>
			<MainPageHeader />

			<div className="container">
				<br />
				<br />
				<br />

				<div className="row">
					{/* {courses.map((course) => (
						<div className="col-sm-4 mb-4" key={course.id}>
							<div className="card course-card">
								<img src={course.pic} className="card-img-top" alt={course.title} />
								<div className="card-body">
									<h5 className="card-title">{course.title}</h5>
									<p className="card-text">{course.description}</p>
									<p className="card-text tutor">{course.tutor}</p>
									<p className="card-text price">₹ {course.price}</p>
									<button
										onClick={() => handleClick(course.id)}
										className="btn btn-primary"
									>
										Explore!
									</button>
								</div>
							</div>
						</div>
					))} */}

					<div className="col-sm-4 mb-4">
						<div className="card course-card">
							<img src={Cyber} className="card-img-top" alt="Introduction to Cyber Security" />
							<div className="card-body">
								<h5 className="card-title">Introduction to Cyber Security</h5>
								<p className="card-text">Cyber Security Basics</p>
								<br />
								<br />
								<button
									onClick={() => {
										handleClick();
									}}
									className="btn btn-primary "
								>
									Explore!
								</button>
							</div>
						</div>
					</div>


					<div className="col-sm-4 mb-4">
						<div className="card course-card">
							<img src={ReactImg} className="card-img-top" alt="Introduction to Cyber Security" />
							<div className="card-body">
								<h5 className="card-title">Introduction to React Course</h5>
								<p className="card-text">Web Development Basics</p>
								<br /><br />
								<button
									onClick={() => {
										handleClick();
									}}
									
									className="btn btn-primary"
								>
									Explore!
								</button>
							</div>
						</div>
					</div>


					<div className="col-sm-4 mb-4">
						<div className="card course-card">
							<img src={NodeImg} className="card-img-top" alt="Introduction to Cyber Security" />
							<div className="card-body">
								<h5 className="card-title">Complete Nodejs Course</h5>
								<p className="card-text">Get started with Node!</p>
								<br /><br />
								<button
									onClick={() => {
										handleClick(1);
									}}
									className="btn btn-primary"
								>
									Explore!
								</button>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<Footer />
		</div>
	);

	async function getCourses() {
		var response = await fetch("http://localhost:8000/allcourses");
		response = await response.json();
		//response is an array of objects
		setCourses(response);
		console.log(response[0]);
	}
	function handleClick(id) {
		navigate("/course/1");
	}
}
