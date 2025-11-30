import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; 

const NavBar = () => {
    return (
        <nav>
            <div className='bg-gray-200 h-16 w-screen flex px-3  items-center justify-between'>
                <div className='w-55 mt-1.5 ml-4'>
                    <img src={logo} alt="logo" className='content-start'/>
                </div>
                <div >
                    <Link to="/" className="text-blue-500 hover:text-gray-500 text-lg mx-2">Home</Link>
                    <Link to="/recipelist" className="text-blue-500 hover:text-gray-500 text-lg mx-2">Recipe List</Link>
                    <Link to="/recipebook" className="text-blue-500 hover:text-gray-500 text-lg mx-2">Recipe Book</Link>
                </div>
                    
            </div>
        </nav>
    );
};

export default NavBar;