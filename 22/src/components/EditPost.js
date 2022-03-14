import { useParams, Link, useHistory } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import DataContext from '../context/DataContext';
import { format } from 'date-fns';
import api from "../api/posts";

const EditPost = () => {
    const { id } = useParams();
    const { posts, setPosts } = useContext(DataContext);
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const post = posts.find(post => (post.id).toString() === id);
    const history = useHistory();
    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);

    const handleUpdateSubmit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const editPost = {
            id: id,
            title: editTitle,
            body: editBody,
            datetime: datetime
        };
        try {
            const response = await api.put(`/posts/${id}`, editPost);
            const updatedPosts = posts.map((post) => post.id === id ? { ...response.data } : post);
            setPosts(updatedPosts);
            setEditTitle("");
            setEditBody("");
            history.push(`/post/${id}`);

        }
        catch (err) {
            console.log(`Error: ${err.msg}`);
        }
    };
    return (
        <main className="NewPost">
            {editTitle && <>
                <h1>Edit Post</h1>
                <form className="newPostForm" onSubmit={(e) => { e.preventDefault() }}>
                    <label htmlFor="editTitle">Title</label>
                    <input type="text" id="editTitle" required value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                    <label htmlFor="postBody">Post Body</label>
                    <textarea id="editBody" cols="30" rows="10" required value={editBody} onChange={(e) => { setEditBody(e.target.value) }} />
                    <button type="submit" onClick={() => handleUpdateSubmit(post.id)}>Submit</button>
                </form>
            </>}
            {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to={'/'}>Visit Our Homepage</Link>
                    </p>
                </>
            }

        </main>
    )
}

export default EditPost
