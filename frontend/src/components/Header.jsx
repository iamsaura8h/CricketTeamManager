import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className=" md:gap-0 md:flex md:justify-around bg-blue-600 p-2 text-white">
      <div className='flex items-center justify-center'>
        <p className='font-dancing text-3xl font-extrabold'>Cricket Manager</p>
      </div>
      <nav className='flex justify-center items-center md:gap-4'>
        <Link to="/create-team" className="mr-4">Create Team</Link>
        <Link to="/display-team" className="mr-4">Display Teams</Link>
        <Link to="/search-team" className='mr-4'>Search Teams</Link>
        <Link to="/edit-team" className='mr-4'>Edit Team</Link>
        <Link to="/delete-team" >Delete Teams</Link>
      </nav>
    </header>
  );
}

export default Header;
