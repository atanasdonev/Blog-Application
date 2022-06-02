import { useState, useEffect } from "react";
import { Post } from "../components/Post";
import { Navbar } from "../components/Navbar";
import postService from "../services/post.service";
import "../styles/posts.css";

export const Posts = () => {
	const [posts, setPosts] = useState([]);

	const init = () => {
		postService
			.getAllPosts()
			.then(response => {
				setPosts(response.data);
			})
			.catch(error => {
				console.log("something went wrong", error);
			});
	};
	useEffect(() => {
		init();
	}, []);

	return (
		<div className="PostsPage">
			<Navbar />
			<hr />
			<div className="posts-container">
				{posts.map(post => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</div>
	);
};
