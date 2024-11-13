import React, { useState, useEffect } from "react";
import DashHeader from "../DashHeader";
import Dashboard from "../Dashboard";
import "../../App.css";
import defaultUser from "../../Assets/defaultUser.webp";
import { toast } from 'react-toastify';

import axios from "axios";

export default function PersonalDetails() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		imgPath: "",
	});
	const userId = localStorage.getItem("userId");

	useEffect(() => {
		getData();
	}, []);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleMedia = async (e) => {
		const formData = new FormData();
		for (let i = 0; i < e.target.files.length; i++) {
			formData.append("filename", e.target.files[i]);
		}
		try {
			const response = await axios.post(
				"http://localhost:8000/users/up",
				formData
			);
			setUser({ ...user, imgPath: response.data });

			console.log(response.data);
		} catch (error) {
			alert("Error uploading image:", error);
		}
	};

	const getData = async () => {
		try {
			const response = await axios.get("http://localhost:8000/users/" + userId);
			setUser(response.data);
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const userData = {
				...user,
			};

			console.log(userData);

			const response = await axios.put(
				"http://localhost:8000/users/" + userId,
				userData
			);
			if (response.status === 200) {
				toast.success("User Information Updated successfully");
				getData();
			} else {
				alert("Failed to update!");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div>
			<DashHeader />
			<Dashboard />
			<div className="position-adjustment">
				<div className="container">
					<div className="table-heading">Personal Details</div>
					<br />
					<br />
					<div className="in-line">
						<div>
							{/* <img
								className="profile-picture"
								src={`http://localhost:8000/uploads/${user.imgPath}`}
								alt="profile"
							/> */}
							<img
								className="profile-picture"
								src={
									user.imgPath.length > 0
										? `http://localhost:8000/uploads/${user.imgPath[0]}`
										: defaultUser
								}
								alt="profile"
							/>

							<input
								type="file"
								className="btn btn-light"
								onChange={handleMedia}
							/>
						</div>
						<div>
							<form className="details-form" onSubmit={handleSubmit}>
								<label>User Name</label>
								<input
									type="text"
									onChange={handleChange}
									value={user.name}
									name="name"
									className="form-control"
								/>
								<label>Email address</label>
								<input
									type="email"
									className="form-control"
									value={user.email}
									onChange={handleChange}
									name="email"
								/>
								<small id="emailHelp" className="form-text text-muted">
									We'll never share your email with anyone else.
								</small>
								<label>Password</label>
								<input
									type="password"
									className="form-control"
									name="password"
									value={user.password}
									onChange={handleChange}
								/>
								<div className="form-group form-check">
									<input type="checkbox" className="form-check-input" />
									<label className="form-check-label">Check me out</label>
								</div>
								<button type="submit" className="btn btn-success">
									Submit!
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
