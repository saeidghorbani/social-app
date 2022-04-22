import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.scss";
import { posts } from "../../fakeData";
import { users } from "../../fakeData";

function Home() {
	return (
		<>
			<Navbar />
			<div className="home">
				<div className="left">
					<Leftbar users={users} />
				</div>
				<div className="feed">
					<Feed posts={posts} users={users} />
				</div>
				<div className="right">
					<Rightbar users={users} />
				</div>
			</div>
		</>
	);
}

export default Home;
