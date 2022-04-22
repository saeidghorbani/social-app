import React from "react";
import OnlineFriends from "../onlineFriends/OnlineFriends";
import "./rightbar.scss";

const Rightbar = ({ users }) => {
	return (
		<div className="rightbar">
			<div>
				<img src={"/images/birthday.png"} alt="img" />
				<p>
					<strong>Vahid</strong> and <strong>3 other</strong> friends have a
					birthday today.
				</p>
			</div>

			<div>
				<img src={"/images/ad1.jpg"} alt="img" />
			</div>

			<OnlineFriends friends={users} />
		</div>
	);
};

export default Rightbar;
