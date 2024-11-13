import React, { useEffect, useState } from "react";
import DashHeader from "../DashHeader";
import Dashboard from "../Dashboard";
import { useNavigate } from "react-router-dom";

export default function UploadedPosts() {
	const [uploadedPosts, setUploadedPosts] = useState([]);
	const navigate = useNavigate();
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		getUploadedPosts();
	}, []);

	return (
		<div>
			<DashHeader />
			<Dashboard />
			<div className="  position-adjustment">
				<div className="container">
					<div className="table-heading">Uploaded Posts</div>
					<br />
					<table className="table table-striped table-hover">
						<thead>
							<tr>
								<th>Post Title</th>
								<th>Upload Date</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{uploadedPosts.length > 0 ? (
								uploadedPosts.map((post) => (
									<tr key={post._id}>
										<td>{post.title}</td>
										<td>{post.date}</td>
										<td>
											<button
												className="btn btn-info"
												onClick={() => handleView(post._id)}
											>
												View
											</button>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan="3" className="text-center">
										No posts uploaded yet.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);

	async function getUploadedPosts() {
		console.log("Fetching posts for user:", userId);
		try {
			const response = await fetch(
				`http://localhost:8000/posts/${userId}`
			);
			if (!response.ok) {
				throw new Error("Failed to fetch posts");
			}
			const data = await response.json();
			console.log("Fetched posts:", data);
			setUploadedPosts(Array.isArray(data) ? data : []);
		} catch (error) {
			console.error("Error fetching posts:", error);
			setUploadedPosts([]);
		}
	}

	function handleView(id) {
		navigate(`/post/${id}`);
	}
}
