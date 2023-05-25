import { Link, NavLink } from 'react-router-dom';

import './navbar&footer.css';

const Navbar = () => {
return (
        <header>
            <nav>
                <div className="logo">
                    <Link to='/'>
                        <span className="Tile">
                            <h1>Training Guidance</h1>
                        </span>
                    </Link>
                </div>
                <ul>
                <li><NavLink to='/'>Start</NavLink></li>
                <li><NavLink to='/Info'>Information</NavLink></li>
                <li><NavLink to='/Muscles'>Muscles</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;