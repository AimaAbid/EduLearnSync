import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserPageLinks/PostPage.css"; // Import CSS file for styling
import Footer from "./Footer";
import "./PostNoEdit.css";
import Hacker from "../Assets/unnamed.jpg";
import axios from "axios";

export default function PostNoEdit() {
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");
	const [postOwner, setPostOwner] = useState("");
	const [postOwnerImg,setPostOwnerImg] = useState({});
	var [flag,setFlag]=useState(0);

	const { id } = useParams(); //id =>postId
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		getData();
		getComments();
	}, [id]);

	useEffect(() => {
		if (post.userId) {
			getUser(post.userId);
		}
	}, [post]);

	useEffect(()=>{
		getComments();

	},[flag]);
	// useEffect(()=>{
	// 	getPostMaker();

	// },[post]);

	// async function getPostMaker(){
	// 	var response=await axios.get("localhost:8000/users/"+post.userId);
	// 	setPostMaker(response.data);

	// }

	const getData = async () => {
		try {
			let response = await fetch(`http://localhost:8000/posts/post/${id}`);
			response = await response.json();
			setPost(response);
		} catch (error) {
			console.error("Error fetching post data:", error);
		}
	};

	const getUser = async (userId) => {
		try {
			let response = await fetch(`http://localhost:8000/users/${userId}`);
			response = await response.json();
			setPostOwner(response.name);
			setPostOwnerImg(response.imgPath[0]);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	async function getComments() {
		
		try {
			var response = await axios.get("http://localhost:8000/comments/"+id);
			setComments(response.data);
		} catch (error) {
			console.error("Error fetching comments jinga:", error);
		}
	};

	async function handleAddComment(e) {
		e.preventDefault();
		const comment = {
			userId, //we want the id of the person who is posting comment that is the person who has logged in not the one who has uplaoded the post,thank you!
			postId: id,
			commentBody: newComment,
		};

		try {
			var response = await axios.post(
				"http://localhost:8000/comments",
				comment
			);
			setFlag(flag++);
			if (response.status === 200) {
				
				
			} else if (response.status === 500) {
				alert("Internal Server Error");
			}
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
						<img src={`http://localhost:8000/uploads/${postOwnerImg}`} className="comment-picture" alt="profile" />{" "}
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
						{comments.map((comment) => (
							<div className="comment">
								<p className="comment-name">
									<img src={Hacker}  className="comment-picture" alt="profile" />{" "}
									default username
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
