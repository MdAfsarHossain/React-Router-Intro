import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, userId, title, body} = post;
    const navigate = useNavigate();
    const {postId} = useParams();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className='border-2 border-red-400 rounded-lg p-5 mt-5'>
            <h2>Post ID: {id}</h2>
            <h2>Post ID: {postId}</h2>
            <h3>User ID: {userId}</h3>
            <h4 className='w-80 font-bold text-orange-600 text-2xl'>Title: {title}</h4>
            <p className='w-56'>Body: {body}</p>        
        
        <Link>
        <button 
        onClick={handleGoBack}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>
                Go Back
            </button></Link>
        </div>
    );
};

PostDetails.propTypes = {
    // post: PropTypes.object,
};

export default PostDetails;