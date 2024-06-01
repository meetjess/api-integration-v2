import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/characters">
            Characters
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/weapons">
            Weapons
          </Link>
        </li>
      </ul>
    </nav>
  );
}
