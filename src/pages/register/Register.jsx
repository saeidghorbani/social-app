import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import "./register.scss";

const Register = () => {
	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});
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

	const handleGoLogin = (e) => {
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
							<Input
								name="username"
								type="text"
								placeholder="Username"
								error={errors.email}
								onChange={handleChange}
							/>
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
								error={errors.email}
								onChange={handleChange}
							/>
							<Input
								name="password2"
								type="text"
								placeholder="Password Again"
								error={errors.email}
								onChange={handleChange}
							/>
							<button type="submit">Sign Up</button>
							<button onClick={handleGoLogin}>Log into Account</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
