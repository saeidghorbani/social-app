import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import "./feed.scss";

const Feed = ({ posts, users }) => {
	return (
		<div className="feed">
			<Share />
			{posts.map((post) => (
				<Post key={post.id} post={post} users={users} margin={{ top: 30 }} />
			))}
		</div>
	);
};

export default Feed;
