import "./Loginstudent.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
//  toast.success("Logged out successfully");
//         toast.success('Success Notification!');
//     toast.error('Error Notification!');
//     toast.info('Info Notification!');
//     toast.warn('Warning Notification!');
export default function Loginstudent() {
	var [name, setName] = useState("");
	var [password, setPassword] = useState("");
	var [errorMessage, setErrorMessage] = useState("");
    var navigate=useNavigate();

	return (
		<div class="auth">
			<form class="form-signup">
				<h1>Login</h1>
				<div class="form-group">
					<label for="inputFirstname">Name:</label>
					{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
					<input
						type="email"
						className="form-control"
						onChange={(e) => setName(e.target.value)}
						value={name}
						placeholder="Enter username"
					/>
				</div>
				<div className="form-group">
					<label for="inputpassword">password:</label>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						required
						value={password}
					/>
				</div>
				<div className="form-group">
					<input
						type="submit"
						required
						onClick={handleSubmit}
						className="btn btn-success"
						value="Submit"
					/>
				</div>
			</form>
		</div>
	);

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:8000/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, password }),
			});
			const data = await response.json();
			if (response.status===200) {
                toast.success("Logged in successfully");
				console.log("Login successful!", data.userId);
				// Save user ID in localStorage
				localStorage.setItem("userId", data.userId);
				// Redirect user to another page
				navigate("/main-page");
			} else {
				setErrorMessage(data.message);
                alert("Login  not successful!");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}
}
