import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import MainPageHeader from "../MainPageHeader";
import "./Createpost.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
//  toast.success("Logged out successfully");
//         toast.success('Success Notification!');
//     toast.error('Error Notification!');
//     toast.info('Info Notification!');
//     toast.warn('Warning Notification!');

export default function CreatePost() {
    const [post, setPost] = useState({
        title: "",
        bodySection: "",
        imgPath: "",
    });
    const [value, setValue] = useState("");
    const [file, setFile] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    

    async function getData() {
        try {
            const response = await axios.get(`http://localhost:8000/posts/post/${id}`);
            setPost(response.data);
            setValue(response.data.bodySection);
            setFile(response.data.imgPath[0]);
        } catch (error) {
            console.error("Error fetching post data:", error);
        }
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleMedia = async (e) => {
        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i++) {
            formData.append("filename", e.target.files[i]);
        }
        try {
            const response = await axios.post("http://localhost:8000/posts/up", formData);
            setPost({ ...post, imgPath: response.data[0] });
            setFile(response.data[0]);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postData = {
                ...post,
                bodySection: value,
            };

            const response = await axios.put(`http://localhost:8000/posts/${id}`, postData);
            if (response.status === 200) {
                toast.success("Post Updated Successfully");
                navigate("/uploaded-posts");
            } else {
                alert("Failed to update post");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <MainPageHeader />

            <div>
                <div >
                    <div className="form">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control input-title"
                                placeholder="Title"
                                name="title"
                                onChange={handleChange}
                                value={post.title}
                            />
                        </div>

                        {file && (
                            <div className="form-group">
                                <label>Current Image:</label>
                                <img
                                    src={`http://localhost:8000/uploads/${file}`}
                                    style={{width:"200px"}}
                                    alt="Current Post"
                                    className="current-post-image"
                                />
                            </div>
                        )}

                        <div className="form-group">
                            <ReactQuill
                                className="editor size"
                                theme="snow"
                                value={value}
                                onChange={setValue}
                            />
                        </div>
                        <input type="file" onChange={handleMedia} />

                        <button className="btn btn-success" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
