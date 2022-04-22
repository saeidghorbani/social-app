import React from "react";
import "./userFriends.scss";

const UserFriends = ({ friends }) => {
	const currentUserId = 1;

	const renderElement = (friend) => {
		if (friend.id === currentUserId) return "";
		else
			return (
				<div key={friend.id}>
					<img src={friend.profilePhoto} alt="" />
					<span>{friend.username}</span>
				</div>
			);
	};

	return (
		<div className="userFriends">
			<h4>User friends</h4>
			<div className="friends">
				{friends.map((friend) => renderElement(friend))}
			</div>
		</div>
	);
};

export default UserFriends;
