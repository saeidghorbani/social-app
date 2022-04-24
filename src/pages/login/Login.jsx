import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
//
const Login = () => {
	const [values, setValues] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState({});

	const navigate = useNavigate();

	const handleChange = (e) => {
		setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
	};

	const validateForm = (values) => {
		const err = {};
		for (const key in values) {
			if (values[key].trim() === "") err[key] = true;
		}
		return err ? err : false;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const err = validateForm(values);
		setErrors(err || {});
		console.log(err);
		if (Object.keys(err).length) return;

		navigate("/home");
	};

	const handleGoRegister = (e) => {
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
						<form onSubmit={handleSubmit}>
							<Input
								name="email"
								type="text"
								placeholder="Email"
								error={errors.email}
								onChange={handleChange}
							/>
							<Input
								name="password"
								type="text"
								placeholder="Password"
								error={errors.password}
								onChange={handleChange}
							/>

							<button type="submit">Log In</button>
							<button onClick={handleGoRegister}>Create a New Account</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;

/////////////////////////////////////////////////////
// import React, { useState } from "react";
// import "./login.scss";
// import { useNavigate } from "react-router-dom";
// //
// const Login = () => {
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [emailError, setEmailError] = useState(false);
// 	const [passwordError, setPasswordError] = useState(false);

// 	const navigate = useNavigate();

// 	const handleLogin = (e) => {
// 		e.preventDefault();

// 		if (e.target[0].value === "") {
// 			setEmailError(true);
// 			return false;
// 		} else if (e.target[1].value === "") {
// 			setPasswordError(true);
// 			return false;
// 		} else navigate("/home");
// 	};

// 	const handleClick = (e) => {
// 		navigate("/register");
// 	};

// 	return (
// 		<>
// 			<div className="login">
// 				<div>
// 					<div className="loginLeft">
// 						<div>
// 							<h1>SocialApp</h1>
// 							<p>
// 								Connect with friends and the world around you with SocialApp
// 							</p>
// 						</div>
// 					</div>
// 					<div className="loginRight">
// 						<form onSubmit={handleLogin}>
// 							<input
// 								name="email"
// 								type="text"
// 								placeholder="Email"
// 								className={emailError ? "errorInput" : ""}
// 								onChange={(e) => setEmail(e.target.value)}
// 							/>
// 							<input
// 								name="password"
// 								type="text"
// 								placeholder="Password"
// 								className={passwordError ? "errorInput" : ""}
// 								onChange={(e) => setPassword(e.target.value)}
// 							/>

// 							<button type="submit">Log In</button>
// 							<button onClick={handleClick}>Create a New Account</button>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Login;
