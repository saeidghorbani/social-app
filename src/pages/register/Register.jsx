import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [usernameError, setUsernameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [password2Error, setPassword2Error] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (e.target[0].value === "") {
			setUsernameError(true);
			return false;
		} else if (e.target[1].value === "") {
			setEmailError(true);
			return false;
		}
		if (e.target[2].value === "") {
			setPasswordError(true);
			return false;
		}
		if (e.target[3].value === "") {
			setPassword2Error(true);
			return false;
		} else navigate("/home");
	};

	const handleClick = () => {
		navigate("/login");
	};

	return (
		<>
			<div className="register">
				<div>
					<div className="registerLeft">
						<div>
							<h1>SocialApp</h1>
							<p>
								Connect with friends and the world around you with SocialApp
							</p>
						</div>
					</div>
					<div className="registerRight">
						<form onSubmit={handleSubmit}>
							<input
								name="username"
								type="text"
								placeholder="Username"
								className={usernameError ? "errorInput" : ""}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<input
								name="email"
								type="text"
								placeholder="Email"
								className={emailError ? "errorInput" : ""}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								name="password"
								type="text"
								placeholder="Password"
								className={passwordError ? "errorInput" : ""}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<input
								name="password2"
								type="text"
								placeholder="Password Again"
								className={password2Error ? "errorInput" : ""}
								onChange={(e) => setPassword2(e.target.value)}
							/>
							<button type="submit">Sign Up</button>
							<button onClick={handleClick}>Log into Account</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
