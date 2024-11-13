import React from "react";
import "./PostPage.css"; // Import CSS file for styling
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Post = () => {
	var [post, setPost] = useState([]);
	const [postOwner, setPostOwner] = useState("");
	const [profile,setProfile]=useState("");
	var navigate = useNavigate();
	var { id } = useParams();

	useEffect(() => {
		getData();
	}, [id]);
	useEffect(()=>{
		if(post.userId){
			getUser(post.userId);
		}

	},[post])

	return (
		<div>
			<div>
				<div className="dash-header ">
					<div className="both" id="left">
						<i class="fa fa-rss" aria-hidden="true">
							&nbsp;
						</i>
						EduLearnSync
					</div>

					<div className="both" id="dash-right">
						<Link to="/uploaded-posts">Go Back</Link>
					</div>
				</div>
			</div>

			{/* //////////////////////////////////////////////////////////////// */}
			<div className="post-page vertical-adjustment">
				<div className="post-container">
					<h1 className="post-title">{post.title}</h1>
					<p className="post-author" style={{textAlign:"center"}}><img src={`http://localhost:8000/uploads/${profile}`} className="comment-picture" alt="profile" />  Posted by {postOwner}</p>
					<p className="post-author" style={{ textAlign: "center" }}>
						Posted on {post.date}
					</p>
					
					<img className="post-image" src={`http://localhost:8000/uploads/${post.imgPath}`} alt="Post" />
					<br /><br /><br /><br />
					
					<div className="post-content" dangerouslySetInnerHTML={{__html: post.bodySection}} />;
					
					<br />
					<button className="btn btn-lg btn-primary" onClick={handleEdit}>
						{" "}
						Edit Post!{" "}
					</button>
					<button
						className="btn btn-lg btn-danger "
						id="delete-button-left"
						onClick={deletePost}
					>
						{" "}
						Delete Post!{" "}
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);

	async function getData() {
		var response = await fetch("http://localhost:8000/posts/post/" + id);
		response = await response.json();
		console.log(response);
		setPost(response);
	}
	async function handleEdit() {
		navigate(`/edit/${id}`);
	}
	async function deletePost() {
		var response=await axios.delete("http://localhost:8000/posts/"+id);
		if(response.status===200){
			alert(response.data.message);
			navigate("/uploaded-posts");
		}
		else{
			alert(response.data.message);
		}
		
	}
	async function getUser(userId)  {
		try {
			let response = await fetch(`http://localhost:8000/users/${userId}`);
			response = await response.json();
			setPostOwner(response.name);
			setProfile(response.imgPath[0]);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};
};

export default Post;
