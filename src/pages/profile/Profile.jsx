import React from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Navbar from "../../components/navbar/Navbar";
import ProfileCover from "../../components/profileCover/ProfileCover";
import Feed from "../../components/feed/Feed";
import ProfileRightbar from "../../components/profileRightbar/ProfileRightbar";
import { posts } from "../../fakeData";
import { users } from "../../fakeData";
import "./profile.scss";

const profile = () => {
	return (
		<>
			<Navbar />
			<div className="profile">
				<div className="profileleft">
					<Leftbar users={users} />
				</div>
				<div className="profileright">
					<ProfileCover />
					<div className="profileRightBottom">
						<div>
							<Feed posts={posts} users={users} />
						</div>
						<div>
							<ProfileRightbar users={users} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default profile;
