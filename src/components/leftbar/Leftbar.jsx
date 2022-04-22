import React, { useState } from "react";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatIcon from "@material-ui/icons/Chat";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import GroupIcon from "@material-ui/icons/Group";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import TodayIcon from "@material-ui/icons/Today";
import SchoolIcon from "@material-ui/icons/School";
import CloseFriends from "../closeFriends/CloseFriends";
import "./leftbar.scss";

const Leftbar = ({ users }) => {
	const [more, setMore] = useState({ btn: "Show More", display: false });

	const handleMore = () => {
		if (!more.display) setMore({ btn: "Show Less", display: true });
		else setMore({ btn: "Show More", display: false });
	};

	return (
		<div className="leftbarWrapper">
			<div className="leftbar">
				<div>
					<span>
						<RssFeedIcon />
					</span>
					<span>Feed</span>
				</div>
				<div>
					<span>
						<ChatIcon />
					</span>
					<span>Chats</span>
				</div>
				<div>
					<span>
						<PlayCircleFilledIcon />
					</span>
					<span>Videos</span>
				</div>
				<div>
					<span>
						<GroupIcon />
					</span>
					<span>Groups</span>
				</div>
				<div>
					<span>
						<BookmarkIcon />
					</span>
					<span>Bookmarks</span>
				</div>
				<div>
					<span>
						<HelpOutlineIcon />
					</span>
					<span>Questions</span>
				</div>
				<div>
					<span>
						<WorkOutlineIcon />
					</span>
					<span>Jobs</span>
				</div>
				<div>
					<span>
						<TodayIcon />
					</span>
					<span>Events</span>
				</div>
				{more.display && (
					<div>
						<span>
							<SchoolIcon />
						</span>
						<span>Course</span>
					</div>
				)}
				<button onClick={handleMore}>{more.btn}</button>
				<hr />
				<CloseFriends friends={users} />
			</div>
		</div>
	);
};

export default Leftbar;
