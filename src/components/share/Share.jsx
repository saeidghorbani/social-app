import React from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import LabelIcon from "@material-ui/icons/Label";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import "./share.scss";

const Share = () => {
	return (
		<div className="share">
			<div className="shareTop">
				<img src={"/images/profile5.jpg"} alt="" />
				<input type="text" placeholder="What's in your mind Saeid?" />
			</div>
			<hr />
			<div className="shareBottom">
				<div className="shareOptions">
					<div>
						<PhotoLibraryIcon htmlColor="tomato" />
						<span>Photo or Video</span>
					</div>
					<div>
						<LabelIcon htmlColor="blue" />
						<span>Tag</span>
					</div>
					<div>
						<LocationOnIcon htmlColor="green" />
						<span>Location</span>
					</div>
					<div>
						<EmojiEmotionsRoundedIcon htmlColor="goldenrod" />
						<span>Feelings</span>
					</div>
				</div>
				<button>Share</button>
			</div>
		</div>
	);
};

export default Share;
