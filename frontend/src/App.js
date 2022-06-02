import { Posts } from "./pages/Posts";
import { AddPost } from "./pages/AddPost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Posts />} />
					<Route path="/add" element={<AddPost />} />
					<Route path="/posts/edit/:id" element={<AddPost />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
