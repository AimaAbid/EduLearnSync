import "./Signupstudent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
//  toast.success("Logged out successfully");
//         toast.success('Success Notification!');
//     toast.error('Error Notification!');
//     toast.info('Info Notification!');
//     toast.warn('Warning Notification!');
function Signupstudent() {
	var [details, setDetails] = useState({
		name:"",
		age: "",
		email: "",
		qualification: "",
		password: "",
	});
	var navigate=useNavigate();
	return (
		<div className="container-student">
			<div class="form-signup">
				<form>
					<h1>Signup </h1>

					<div class="form-group">
						<div>
							<label for="inputFirstname">User-name:</label>
							<input
								onChange={handleChange}
								type="text"
								class="form-control"
								placeholder="firstname"
								name="name"
							/>
						</div>
					</div>

					<div class="form-group">
						<label for="inputAge">age:</label>
						<input
							type="text"
							class="form-control"
							placeholder="age"
							name="age"
							onChange={handleChange}
						/>
					</div>
					<div class="form-group">
						<label for="inputAge">email:</label>
						<input
							type="email"
							class="form-control"
							name="email"
							placeholder="email"
							onChange={handleChange}
						/>
					</div>

					<div class="form-group">
						<label class="my-1 mr-2" for="inlineFormCustomSelectPref">
							qualification
						</label>
						<select
							class="custom-select my-1 mr-sm-2"
							id="inlineFormCustomSelectPref"
							onChange={handleChange}
							name="qualification"
						>
							<option selected>Choose...</option>
							<option value="10th">10th</option>
							<option value="12th">12th</option>
							<option value="b.tech">b.tech</option>
						</select>
					</div>

					<div class="form-group">
						<label for="inputPassword">password:</label>
						<input
							type="password"
							class="form-control"
							placeholder="password"
							name="password"
							onChange={handleChange}
						/>
					</div>
					<br />

					<button
						type="submit"
						onClick={handleSubmit}
						class="btn  btn-success "
					>
						Sign Up!
					</button>
					<br />

					<Link to="/" className="already">
						Already registered? Log In!
					</Link>
				</form>
			</div>
		</div>
	);

	function handleChange(e) {
		setDetails({ ...details, [e.target.name]: e.target.value });
		console.log(details);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		var response = await fetch("http://localhost:8000/users/sign-up", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(details),
		});
		if (response.ok) {
			toast.success("Signed up  successfully");
			console.log(response.data);
			navigate("/");
		}
	}
}
export default Signupstudent;
