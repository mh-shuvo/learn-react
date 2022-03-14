import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DataContext from '../context/DataContext';
import { format } from 'date-fns';
import api from "../api/posts.js";
const NewPost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const { posts, setPosts } = useContext(DataContext);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = (posts.length > 0 ? (posts[posts.length - 1].id + 1) : 1);
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = {
            id: id,
            title: postTitle,
            body: postBody,
            datetime: datetime
        };
        try {
            const response = await api.post('/posts', newPost);

            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle("");
            setPostBody("");
            history.push(`/post/${id}`);

        }
        catch (err) {
            console.log(`Error: ${err.msg}`);
        }
    }

    return (
        <main className="NewPost">
            <h1>New Post</h1>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title</label>
                <input type="text" id="postTitle" required value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                <label htmlFor="postBody">Post Body</label>
                <textarea id="postBody" cols="30" rows="10" required value={postBody} onChange={(e) => setPostBody(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost
