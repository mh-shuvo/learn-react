import { useParams, Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import api from "../api/posts";
const PostPage = () => {
    const history = useHistory();
    const { id } = useParams();
    const { posts, setPosts } = useContext(DataContext);
    const post = posts.find(post => (post.id).toString() === id);
    const handleDelete = async (id) => {
        try {
            const response = await api.delete(`posts/${id}`);
            const postsAfterDelete = posts.filter((item) => item.id != id);
            setPosts(postsAfterDelete);
            history.push('/');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }
    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate"> {post.datetime} </p>
                        <p className="posBody">{post.body}</p>
                        <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete Post</button>
                        <Link to={`/edit/${id}`}><button type="button" className="editButton"> Edit Post</button></Link>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to={'/'}>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage
