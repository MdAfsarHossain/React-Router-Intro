import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {

    const userData = useLoaderData();
    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate(-1);
    };

    
    const {name, username, email, phone, website, address} = userData;

    return (
        <div className='border-2 border-blue-500  rounded-lg p-5 mt-5 space-y-2 shadow-lg flex flex-col '>
            <h1>Name: {name}</h1>
            <h3>UserName: {username}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Address: {address.street}</p>

            <Link >
            <button
            onClick={handleGoBack} 
            className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center'>Go Back</button>
            </Link>
        </div>
    );
};

export default UserDetails;