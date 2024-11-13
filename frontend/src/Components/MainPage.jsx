import React from "react";



import Footer from "./Footer";
import MainPageHeader from "./MainPageHeader";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function MainPage() {
	var [posts, setPosts] = useState([]);
	var navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		getPosts();
	}, []);
	return (
		<div>
			<MainPageHeader />
			<div className="main-page ">
				
				<div>
					<div>
						{searchResults.map((post) => (
							<div >
								<h2>{post.title}</h2>
								<p>{post.description}</p>
							</div>
						))}
					</div>
				</div>

				{posts.map((post) => (
					<div className=" post">
						<p id="title">{post.title} </p>

						<br />
						{/* <p id="username">{post.username}</p> */}
						<img src={`http://localhost:8000/uploads/${post.imgPath}`} alt="img" />
						<br />
						<br />
						<button
							className="btn btn-primary "
							id="button"
							onClick={() => {
								handleRead(post._id);
							}}
						>
							Read More
						</button>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);

	async function getPosts() {
		var response = await fetch("http://localhost:8000/posts");
		response = await response.json();
		//response is an array of objects
		setPosts(response);
		console.log(response);
	}
	function handleRead(id) {
		navigate(`/general-post/${id}`);
	}
	async function handleSearch() {
		fetch("/search", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ searchQuery }),
		})
			.then((response) => response.json())
			.then((data) => {
				setSearchResults(data);
			})
			.catch((error) => console.error("Error:", error));
	}
}
