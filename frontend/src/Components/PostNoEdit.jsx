import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserPageLinks/PostPage.css"; // Import CSS file for styling
import Footer from "./Footer";
import "./PostNoEdit.css";
// import Hacker from "../Assets/unnamed.jpg";
import axios from "axios";
import defaultUser from "../Assets/defaultUser.webp"

export default function PostNoEdit() {
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");
	const [postOwner, setPostOwner] = useState({});
	const [commentUsers, setCommentUsers] = useState({});

	const { id } = useParams(); // id => postId
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		getData();
		getComments();
	}, [id]);

	useEffect(() => {
		if (post.userId) {
			getUser(post.userId, setPostOwner);
		}
	}, [post]);

	const getData = async () => {
		try {
			let response = await fetch(`http://localhost:8000/posts/post/${id}`);
			response = await response.json();
			setPost(response);
		} catch (error) {
			console.error("Error fetching post data:", error);
		}
	};

	const getUser = async (userId, callback) => {
		try {
			let response = await fetch(`http://localhost:8000/users/${userId}`);
			response = await response.json();
			callback(response);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	async function getComments() {
		try {
			var response = await axios.get(`http://localhost:8000/comments/${id}`);
			const commentsData = response.data;
			setComments(commentsData);

			// Fetch user data for each comment
			const userFetchPromises = commentsData.map(comment => {
				return axios.get(`http://localhost:8000/users/${comment.userId}`);
			});
			const usersData = await Promise.all(userFetchPromises);

			// Create a mapping of userId to user data
			const userMap = {};
			usersData.forEach((res, index) => {
				userMap[commentsData[index].userId] = res.data;
			});
			setCommentUsers(userMap);
		} catch (error) {
			console.error("Error fetching comments:", error);
		}
	}

	async function handleAddComment(e) {
		e.preventDefault();
		const comment = {
			userId, // id of the person who is posting the comment
			postId: id,
			commentBody: newComment,
		};

		try {
			var response = await axios.post(
				"http://localhost:8000/comments",
				comment
			);
			if (response.status === 201) {
				setNewComment("");
				getComments();
			} else if (response.status === 500) {
				alert("Internal Server Error");
			}
		} catch (error) {
			alert(error.message);
		}
	}

	const getUserImage = (userId) => {
		const user = commentUsers[userId];
		return user && user.imgPath.length > 0
			? `http://localhost:8000/uploads/${user.imgPath[0]}`
			: defaultUser;
	};

	return (
		<div>
			<div className="dash-header">
				<div className="both" id="left">
					<i className="fa fa-rss" aria-hidden="true">
						&nbsp;
					</i>
					EduLearnSync
				</div>
				<div className="both" id="dash-right">
					<Link to="/main-page">Go Back</Link>
				</div>
			</div>
			{/* ////////////////////////////////////////////////////////////// */}
			<div className="post-page vertical-adjustment">
				<div className="post-container">
					<h1 className="post-title">{post.title}</h1>
					<p className="post-author" style={{ textAlign: "center" }}>
						<img
							src={postOwner.imgPath && postOwner.imgPath.length > 0
								? `http://localhost:8000/uploads/${postOwner.imgPath[0]}`
								: defaultUser}
							className="comment-picture"
							alt="profile"
						/>{" "}
						Posted by {postOwner.name}
					</p>
					<p className="post-author" style={{ textAlign: "center" }}>
						Posted on {post.date}
					</p>
					<img
						className="post-image"
						src={`http://localhost:8000/uploads/${post.imgPath}`}
						alt="Post"
					/>
					<br /><br /><br /><br />
					<p className="post-content"  dangerouslySetInnerHTML={{__html: post.bodySection}} />
					<br />
					<br />
					<div className="comments-section">
						<h4>Comments:</h4>
						{comments.map((comment) => (
							<div className="comment" key={comment._id}>
								<p className="comment-name">
									<img
										src={getUserImage(comment.userId) ||defaultUser} 
										className="comment-picture"
										alt="profile"
									/>{" "}
									{commentUsers[comment.userId]?.name || "default username"}
								</p>
								<p>{comment.commentBody}</p>
							</div>
						))}
						<div className="add-comment">
							<textarea
								rows="4"
								cols="50"
								value={newComment}
								onChange={(e) => setNewComment(e.target.value)}
								placeholder="Add a new comment..."
							></textarea>
							<button onClick={handleAddComment}>Add Comment</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
