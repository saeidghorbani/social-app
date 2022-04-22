import UserInformation from "../../components/userInformation/UserInformation";
import UserFriends from "../userFriends/UserFriends";
import "./profileRightbar.scss";

const ProfileRightbar = ({ users }) => {
	const currentUserId = 1;
	const currentUser = users.filter((user) => user.id === currentUserId)[0];

	return (
		<div className="profileRightbar">
			<UserInformation user={currentUser} />
			<UserFriends friends={users} />
		</div>
	);
};

export default ProfileRightbar;
