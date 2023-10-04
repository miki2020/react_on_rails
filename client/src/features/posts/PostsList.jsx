
import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { API_URL } from '../../constants'

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);
    
    //fetch posts from API
    
    useEffect(() => {
        async function loadPosts() {
            try {
                const response = await fetch(API_URL);
                console.log(API_URL);
                console.log(response);
                if (response.ok) {
                    const json = await response.json();
                    setPosts(json);
                } else {
                    throw response;
                }
            } catch (e) {
                setError("Load posts error");
                console.error("Failed to fetch posts: ", e);
            } finally {
                setLoading(false);
            }
        }
        loadPosts();
    }, []);
    return (
        <div>
        {posts.map((post) => (
            <div key={post.id} className="post-container">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link to={`posts/${post.id}`}>Show post</Link>
            </div>
            
        ))}
        </div>
    );
    }
    export default PostsList;