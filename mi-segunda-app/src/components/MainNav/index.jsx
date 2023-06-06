import { NavLink } from "react-router-dom";

const MainNav = () => (
  <nav className="primary-nav">
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
    </ul>
  </nav>
);

export { MainNav };
