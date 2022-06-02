import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className="navbar">
			<h2>Blog Application</h2>
			<button
				type="submit"
				className="button add"
				onClick={() => {
					navigate("/add");
				}}
			>
				Create Post
			</button>
		</div>
	);
};
