import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white">
      <nav>
        <Link to="/create-team" className="mr-4">Create Team</Link>
        <Link to="/display-team" className="mr-4">Display Teams</Link>
        <Link to="/search-team">Search Teams</Link>
      </nav>
    </header>
  );
}

export default Header;
