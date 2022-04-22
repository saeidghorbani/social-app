import React from "react";
import "./userInformation.scss";

const UserInformation = ({ user }) => {
	return (
		<div className="userInformation">
			<h4>User information</h4>
			<div></div>
			<p>
				City: <span>{user.city}</span>
			</p>
			<p>
				From: <span>{user.from}</span>
			</p>
			<p>
				Relationship: <span>{user.relationship}</span>
			</p>
			<div></div>
		</div>
	);
};

export default UserInformation;
