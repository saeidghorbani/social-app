import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
//
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();

		if (e.target[0].value === "") {
			setEmailError(true);
			return false;
		} else if (e.target[1].value === "") {
			setPasswordError(true);
			return false;
		} else navigate("/home");
	};

	const handleClick = (e) => {
		navigate("/register");
	};

	return (
		<>
			<div className="login">
				<div>
					<div className="loginLeft">
						<div>
							<h1>SocialApp</h1>
							<p>
								Connect with friends and the world around you with SocialApp
							</p>
						</div>
					</div>
					<div className="loginRight">
						<form onSubmit={handleLogin}>
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

							<button type="submit">Log In</button>
							<button onClick={handleClick}>Create a New Account</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
