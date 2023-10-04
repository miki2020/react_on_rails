import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { API_URL } from "../../constants";

function PostEditForm() {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    console.log("id is:", id);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchCurrentPost = async () => {
            console.log("api url: ", `${API_URL}/${id}`)
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (response.ok) {
                    const json = await response.json();
                    setPost(json);
                } else {
                    throw response;
                }
            } catch(e) {
                console.log("Error connecting to api:", e);
                setError(e);
            } finally {
                setLoading(false);
            }
        };
        fetchCurrentPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: post.title,
                body: post.body
            }),
        });

        if (response.ok) {
            const { id } = await response.json();
            navigate(`/posts/${id}`)
        } else {
            console.log("error while saving post");
        }
    }

    
    if (!post) return <h2>Loading...</h2>;

    return (
        <div>
            <h2>Edit post page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="post-title">Title</label>
                    <input
                        type="text"
                        id="post-title"
                        value={post?.title}
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="post-body">Body</label>
                    <textarea
                        id="post-body"
                        value={post.body}
                        onChange={(e) => setPost({ ...post, body: e.target.value })}
                    />
                </div>
                <div>
                    <button type="submit">Save Post</button>
                </div>
            </form>
        </div>
    );
}

export default PostEditForm;