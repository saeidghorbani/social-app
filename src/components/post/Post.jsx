import React, { useState } from "react";
import "./post.scss";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Post = ({ post, users, margin }) => {
	const { top } = margin;
	const [isLiked, setIsLiked] = useState(false);
	const [likeCounter, setLikeCounter] = useState(post.liked);

	const handleLike = () => {
		if (!isLiked) {
			setIsLiked(true);
			setLikeCounter(likeCounter + 1);
			return false;
		}
		setIsLiked(false);
		setLikeCounter(likeCounter - 1);
		return true;
	};

	return (
		<div className="post" style={{ marginTop: `${top}px` }}>
			<div className="topPost">
				<div>
					<img
						src={
							users.filter((user) => user.id === post.userId)[0].profilePhoto
						}
						alt="img"
					/>
					<span>
						{users.filter((user) => user.id === post.userId)[0].username}
					</span>
					<span>{post.date}</span>
				</div>
				<MoreVertIcon />
			</div>
			<p>{post.desc}</p>
			<img src={post.photo} alt="img" />
			<div className="bottomPost">
				<div>
					<span onClick={handleLike}>
						<FavoriteBorderIcon
							htmlColor={isLiked ? "red" : ""}
							className="like"
						/>
					</span>
					<sapn>{`${likeCounter} people liked it`}</sapn>
				</div>
				<span>{post.comments} comments</span>
			</div>
		</div>
	);
};

export default Post;
