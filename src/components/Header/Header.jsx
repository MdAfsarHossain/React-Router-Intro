import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {

    return (
        <div >
            <h2 className="text-5xl font-bold mb-5">Welcome To My Website</h2>
            <nav className="flex gap-5 justify-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about" className="active:text-red-400">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;