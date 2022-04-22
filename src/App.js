import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React from "react";
import "./App.scss";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Home />} />
				<Route path="profile" element={<Profile />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
