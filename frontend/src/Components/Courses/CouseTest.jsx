import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Course.css";
import CourseSideBar from "./CourseSideBar";

import Footer from "../Footer";
const courseData = [
	{
		title: "Module 1",
		submodules: [
			{
				title: "Submodule 1.1",
				subsubmodules: [
					{ title: "Sub-submodule 1.1.1" },
					{ title: "Sub-submodule 1.1.2" },
				],
			},
			{
				title: "Submodule 1.2",
				subsubmodules: [
					{ title: "Sub-submodule 1.2.1" },
					{ title: "Sub-submodule 1.2.2" },
				],
			},
		],
	},
	{
		title: "Module 2",
		submodules: [
			{
				title: "Submodule 2.1",
				subsubmodules: [
					{ title: "Sub-submodule 2.1.1" },
					{ title: "Sub-submodule 2.1.2" },
				],
			},
		],
	},
];

export default function Course() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	// var [course,setCourse]=useState({});
	// var {id}=useParams();
	// useEffect(() => {

	// },[]);
	return (
		// <div>
		// 	<h1>Course</h1>
		//     {course.title}
		//     {course.description}
		//     {course.tutor}
		//     {course.price}

		// </div>

		<div>
			<div className="course-header">
				<div className="header-items">
					<i class="fa fa-rss" aria-hidden="true">
						&nbsp;
					</i>
					EduCollabHub
				</div>

				<div className="header-items">Introduction to Cyber Security</div>

				<div className="header-items">
					<button className="course-outline-btn" onClick={toggleSidebar}>
						Course Outline
					</button>
					<CourseSideBar
						isOpen={isSidebarOpen}
						closeSidebar={toggleSidebar}
						courseData={courseData}
					/>
					<div className="main-page container">
						{/* Your existing content */}
					</div>
					
				</div>
				<Footer />
			</div>
			{/* ////////////////////////////////////////////////////////////////////// */}
		
		</div>
	);
}
