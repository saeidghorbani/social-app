import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from "@material-ui/icons/Chat";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbarLeft">
				<span>Social</span>
			</div>
			<div className="navbarCenter">
				<div className="searchbar">
					<SearchIcon className="searchIcon" />
					<input type="text" placeholder="Search for posts..." />
				</div>
			</div>
			<div className="navbarRight">
				<div className="navbarLinks">
					<nav>
						<Link to="/">Home</Link>
						<Link to="/profile">Profile</Link>
						<Link to="/login">Login</Link>
					</nav>
				</div>
				<div className="navbarIcons">
					<div className="navbarIcon">
						<PersonIcon />
						<span>1</span>
					</div>
					<div className="navbarIcon">
						<ChatIcon />
						<span>3</span>
					</div>
				</div>
				<div className="navbarUser">
					<img src={"/images/profile5.jpg"} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
