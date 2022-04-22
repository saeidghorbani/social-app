import React from "react";
import "./profileCover.scss";

const ProfileCover = () => {
	return (
		<div className="profileRightTop">
			<div>
				<img src={"/images/cover2.jpg"} alt="img" />
				<img src={"/images/profile5.jpg"} alt="img" />
			</div>
			<div>
				<h4>Saeid Saeidi</h4>
				<p>Hello my friends!</p>
			</div>
		</div>
	);
};

export default ProfileCover;
