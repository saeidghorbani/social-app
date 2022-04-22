import React from "react";
import "./closeFriends.scss";

const CloseFriends = ({ friends }) => {
	const currentUserId = 1;

	const renderElement = (friend) => {
		if (friend.id === currentUserId) return "";
		else
			return (
				<li key={friend.id}>
					<div>
						<img src={friend.profilePhoto} alt="img" />
					</div>
					<span>{friend.username}</span>
				</li>
			);
	};

	return (
		<>
			<h4>Close Friends</h4>
			<ul className="closeList">
				{friends.map((friend) => renderElement(friend))}
			</ul>
		</>
	);
};

export default CloseFriends;
