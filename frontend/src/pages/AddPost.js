import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import postService from "../services/post.service";
import "../styles/addpost.css";

export const AddPost = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();
	const { id } = useParams();

	const savePost = e => {
		e.preventDefault();
		const post = { title, content, id };

		if (id) {
			//update
			postService
				.updatePost(post)
				.then(response => {
					console.log("post updated");
					navigate("/");
				})
				.catch(error => {
					console.log("something went wrong", error);
				});
		} else {
			//create new
			postService
				.createPost(post)
				.then(response => {
					console.log("post created");
					navigate("/");
				})
				.catch(error => {
					console.log("something went wrong" + error);
				});
		}
	};

	useEffect(() => {
		if (id) {
			postService
				.getPostById(id)
				.then(post => {
					setTitle(post.data.title);
					setContent(post.data.content);
				})
				.catch(error => {
					console.log("something went wrong", error);
				});
		}
	}, []);

	return (
		<div className="AddPostPage">
			<div className="container">
				<h3>Create a post</h3>
				<hr />
				<form action="">
					<div>
						<div className="title-container">
							<label htmlFor="title">Title</label>
							<input
								type="text"
								className="title-input"
								id="title"
								value={title}
								onChange={e => {
									setTitle(e.target.value);
								}}
								placeholder="Enter title"
							/>
						</div>

						<div className="content-container">
							<label htmlFor="content">Content</label>
							<textarea
								type="text"
								className="content-input"
								id="content"
								value={content}
								onChange={e => {
									setContent(e.target.value);
								}}
								placeholder="Enter content"
							/>
						</div>
					</div>
					<div>
						<button
							className="button"
							type="submit"
							onClick={e => {
								savePost(e);
							}}
						>
							{id ? "Update" : "Post"}
						</button>
						<br />
						<Link to="/" className="back-link">
							Back to posts
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
