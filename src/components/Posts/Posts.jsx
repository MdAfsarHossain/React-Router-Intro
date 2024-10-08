import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();

    return (
        <div className='flex flex-col gap-2 py-5 text-center'>
            <h1 className='text-2xl'>All Posts: {posts.length}</h1>
            <p>Welcome to all posts section</p>
            <div className="grid grid-cols-4 gap-5">
                {
                    posts.map(post => 
                        <Post key={post.id} post={post}></Post>
                    )
                }
            </div>
        </div>
    );
};

export default Posts;