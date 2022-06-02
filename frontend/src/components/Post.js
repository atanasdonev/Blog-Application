import { Link } from "react-router-dom";
import postService from "../services/post.service";
import "../styles/post.css";
import "../index.css";

export const Post = ({ post }) => {
	const deletePost = id => {
		postService
			.deletePost(id)
			.then(response => {
				console.log("post deleted", response.data);
			})
			.catch(error => {
				console.log("something went wrong", error);
			});
	};

	return (
		<div className="post">
			<h4 className="post-title">{post.title}</h4>
			<hr />
			<div className="post-content">
				<p>{post.content}</p>
			</div>
			<div className="buttons">
				<Link className="button link" to={`/posts/edit/${post.id}`}>
					Edit
				</Link>
				<button
					type="submit"
					className="button delete"
					onClick={e => {
						deletePost(post.id);
						window.location.reload();
					}}
				>
					Delete
				</button>
			</div>
		</div>
	);
};
