
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserPageLinks/PostPage.css"; // Import CSS file for styling
import Footer from "./Footer";
import "./PostNoEdit.css";
import Hacker from "../Assets/unnamed.jpg";

export default function PostNoEdit() {
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");
	const [postOwner, setPostOwner] = useState("");

	const { postId } = useParams();
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		getData();
		getComments();
	}, [postId]);

	useEffect(() => {
		if (post.userId) {
			getUser(post.userId);
		}
	}, [post]);

	const getData = async () => {
		try {
			let response = await axios.get("http://localhost:8000/posts/post/"+postId);
			
			setPost(response.data);
		} catch (error) {
			console.error("Error fetching post data:", error);
		}
	};

	const getUser = async (userId) => {
		try {
			let response = await fetch(`http://localhost:8000/users/${userId}`);
			response = await response.json();
			setPostOwner(response.name);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	const getComments = async () => {
		try {
			let response = await fetch("http://localhost:8000/comments/3");
			response = await response.json();
			setComments(response);
		} catch (error) {
			console.error("Error fetching comments:", error);
		}
	};

	async function handleAddComment() {
		try {
			var ans = {
				userId,
				postId,
				commentBody: newComment,
			};
			var response = await axios.post("http://localhost:8000/comments", ans);
			alert(response.data.commentBody);
		} catch (error) {
			alert(error.message);
		}
	}

	return (
		<div>
			<div className="dash-header">
				<div className="both" id="left">
					<i className="fa fa-rss" aria-hidden="true">
						&nbsp;
					</i>
					EduCollabHub
				</div>
				<div className="both" id="dash-right">
					<Link to="/main-page">Go Back</Link>
				</div>
			</div>
			<div className="post-page vertical-adjustment">
				<div className="post-container">
					<h1 className="post-title">{post.title}</h1>
					<p className="post-author" style={{ textAlign: "center" }}>
						<img src={Hacker} className="comment-picture" alt="profile" />{" "}
						Posted by {postOwner}
					</p>
					<p className="post-author" style={{ textAlign: "center" }}>
						Posted on {post.date}
					</p>
					<img
						className="post-image"
						src={`http://localhost:8000/uploads/${post.imgPath}`}
						alt="Post"
					/>
					<p className="post-content">{post.bodySection}</p>
					<br />
					<br />
					<div className="comments-section">
						<h4>Comments:</h4>
						{/* {comments.map((comment) => (
							<div key={comment.id} className="comment">
								<p className="comment-name">
									<img src={Hacker} className="comment-picture" alt="profile" />{" "}
									{comment.username}
								</p>
								<p>{comment.text}</p>
							</div>
						))} */}
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
