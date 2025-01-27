import "./HeaderComponent.css";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {

  return (
    <header className="header">
      <h2 className="title">Note App </h2>
      <nav>
        <ul className="link-list">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/notes" className="link">
              Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;