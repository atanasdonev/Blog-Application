import httpClient from "../http-common";

const getAllPosts = () => {
	return httpClient.get("/posts");
};

const createPost = data => {
	return httpClient.post("/posts", data);
};

const getPostById = id => {
	return httpClient.get(`/posts/${id}`);
};

const updatePost = data => {
	return httpClient.put("/posts", data);
};

const deletePost = id => {
	return httpClient.delete(`/posts/${id}`);
};

export default { getAllPosts, createPost, getPostById, updatePost, deletePost };
