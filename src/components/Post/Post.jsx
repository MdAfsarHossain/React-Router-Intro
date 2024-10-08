import PropTypes from 'prop-types';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, userId, title} = post;
    const navigate = useNavigate();

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }


    return (
        <div className='border-2 border-orange-400 rounded-lg p-5'>
            <p className='text-center'>Post Id : {id}</p>
            <h1 className='font-bold text-white'>Title: {title}</h1>

            <Link to={`/post/${id}`}>
            <button className='btn bg-orange-400 text-black hover:text-white'>View Post</button>
            </Link>

            <button 
            onClick={handleShowDetail}
            className='btn bg-red-400 text-black hover:text-white ml-5'>Post Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
};

export default Post;