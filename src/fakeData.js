export const users = [
	{
		id: 1,
		isOnline: false,
		profilePhoto: "/images/profile5.jpg",
		username: "Saeid Saeidi",
		city: "Tehran",
		from: "Hamedan",
		relationship: "singel",
		followingIds: [2, 3, 7, 5, 6],
		followerIds: [2, 4, 6],
		closeFriends: [5, 4, 2, 3],
	},
	{
		id: 2,
		isOnline: true,
		profilePhoto: "/images/profile2.jpg",
		username: "Rose Mia",
		city: "Madrid",
		from: "london",
		relationship: "singel",
		followingIds: [2, 3, 7, 5, 6],
		followerIds: [2, 4, 6],
	},
	{
		id: 3,
		isOnline: false,
		profilePhoto: "/images/profile3.jpg",
		username: "Emma Jane",
		city: "Birmangham",
		from: "london",
		relationship: "married",
		followingIds: [1, 4, 12, 7, 8, 6],
		followerIds: [2, 4, 6],
	},
	{
		id: 4,
		isOnline: false,
		profilePhoto: "/images/profile4.jpg",
		username: "Ali Azimi",
		city: "Shiraz",
		from: "Tabriz",
		relationship: "singel",
		followingIds: [1, 2, 11, 12, 5, 6],
		followerIds: [2, 8, 7],
	},
	{
		id: 5,
		isOnline: true,
		profilePhoto: "/images/profile6.jpg",
		username: "Arya Mahan",
		city: "Amesterdam",
		from: "Munich",
		relationship: "singel",
		followingIds: [1, 13, 5, 9, 6],
		followerIds: [5, 10, 7, 5],
	},
	{
		id: 6,
		isOnline: true,
		profilePhoto: "/images/profile9.jpg",
		username: "Dani Carter",
		city: "New York",
		from: "Abadan",
		relationship: "singel",
		followingIds: [1, 8, 3, 7, 2],
		followerIds: [2, 8, 6],
	},
	{
		id: 7,
		isOnline: false,
		profilePhoto: "/images/profile7.jpg",
		username: "Samuel mac",
		city: "riaz",
		from: "Dubai",
		relationship: "singel",
		followingIds: [2, 3, 7, 5, 6],
		followerIds: [2, 4, 6],
	},
];
//////////////// POSTS////////////
export const posts = [
	{
		id: 1,
		desc: "Love For All, Hatred For None.",
		photo: "/images/post1.jpg",
		date: "10 min ago",
		liked: 1001,
		comments: 8,
		userId: 1,
	},
	{
		id: 2,
		desc: "Good days in england.",
		photo: "/images/post2.jpg",
		date: "1 hour ago",
		liked: 46,
		comments: 8,
		userId: 2,
	},
	{
		id: 3,
		desc: "life is beautiful and just enjoy your life.",
		photo: "/images/post3.jpg",
		date: "2 days ago",
		liked: 28,
		comments: 8,
		userId: 5,
	},
	{
		id: 4,
		desc: "good feelings.",
		photo: "/images/post4.jpg",
		date: "3 days ago",
		liked: 81,
		comments: 8,
		userId: 4,
	},
	{
		id: 5,
		desc: "",
		photo: "/images/post5.jpg",
		date: "14 days ago",
		liked: 150,
		comments: 8,
		userId: 3,
	},
	{
		id: 6,
		desc: "no words to explain.",
		photo: "/images/post6.jpg",
		date: "1 month ago",
		liked: 50,
		comments: 8,
		userId: 3,
	},
	{
		id: 7,
		desc: "Love For All, Hatred For None.",
		photo: "/images/post7.jpg",
		date: "1 month ago",
		liked: 40,
		comments: 8,
		userId: 2,
	},
];
