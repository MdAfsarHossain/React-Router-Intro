import React from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <div className='text-center flex flex-col justify-center items-center h-full gap-5'>
            <h1 className='text-7xl text-red-600'>Oops!</h1>
            <p className='text-3xl text-red-500'>Page Not Found</p>
            {error && <p className='text-xl text-gray-500'>{error.message}</p>}

            {
                error.status === 404 && 
                <div>
                    <p className='text-xl text-gray-500'>The requested page could not be found.</p>
                    <p className='text-xl text-gray-500'>Please check the URL and try again.</p>
                </div>
            }

            <Link to='/'>
            <button
            className='mt-10 text-blue-500 hover:text-blue-700'>Go to Home</button>
            </Link>


            <Link>
            <button 
            onClick={navigate(-1)}
            className='mt-10 text-blue-500 hover:text-blue-700'>Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;