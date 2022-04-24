import React from "react";
import "./input.scss";

//
const Input = ({ name, type, placeholder, error, onChange }) => {
	return (
		<input
			name={name}
			type={type}
			placeholder={placeholder}
			className={error ? "errorInput formInput" : "formInput"}
			onChange={onChange}
		/>
	);
};

export default Input;
