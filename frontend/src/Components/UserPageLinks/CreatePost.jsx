import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DashHeader from "../DashHeader";
import Dashboard from "../Dashboard";
import "./Createpost.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
 

export default function CreatePost() {
    const [post, setPost] = useState({
        title: "",
        subject: "",
        bodySection: "",
        imgPath: "",
        userId: ""
    });
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    // Retrieve the userId from localStorage
    const userId = localStorage.getItem("userId");

    console.log("post" + JSON.stringify(post));

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
            setPost({ ...post, imgPath: response.data });
            console.log(response.data);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("userId in handleSubmit:", userId);

        try {
            const postData = {
                ...post,
                userId: userId,  // Ensuring userId is added to postData
                bodySection: value
            };

            console.log(postData);

            const response = await fetch("http://localhost:8000/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(postData),
            });
            if (response.ok) {
                toast.success("Post created successfully");
                navigate("/uploaded-posts");
            } else {
                toast.error("Failed to add post");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
          
           
          
                <div className="create-auth place-center">
                    <div className="form">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control input-title"
                                placeholder="Title"
                                name="title"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <select
                                onChange={handleChange}
                                name="subject"
                                className="form-control"
                            >
                                <option>Computer network</option>
                                <option>Automata</option>
                                <option>Compiler</option>
                                <option>DBMS</option>
                                <option>Data Structure</option>
                                <option>Microprocessor</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <ReactQuill
                                className="editor size"
                                theme="snow"
                                value={value}
                                onChange={setValue}
                            />
                        </div>
                        <input type="file" className="in btn btn-light btn1" onChange={handleMedia} />

                        <button className="btn btn-success btn1" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
       
    );
}
