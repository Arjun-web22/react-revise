import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <>
        <div className='bg-slate-400 w-full'>
        <h1>My College</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/profile">Profile</Link>
        </nav>
        </div>
        </>
    )
}

export default NavBar;