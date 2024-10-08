import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {

    const {id, name, email} = user;

    return (
        <div className='border-2 rounded-lg border-orange-300 p-5 flex flex-col'>
            <h4>ID: {id}</h4>
            <h1 className='font-bold text-xl text-yellow-200'>Name: {name}</h1>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>
                View Details
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;