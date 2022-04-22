import React from "react";
import "./onlinefriends.scss";

const OnlineFriends = ({ friends }) => {
	const onlineFriends = friends.filter((friend) => friend.isOnline === true);

	return (
		<>
			<h4>Online Friends</h4>
			<ul className="onlineList">
				{onlineFriends.map((friend) => (
					<li key={friend.id}>
						<div>
							<img src={friend.profilePhoto} alt="img" />
							<span></span>
						</div>
						<span>{friend.username}</span>
					</li>
				))}
			</ul>
		</>
	);
};

export default OnlineFriends;
