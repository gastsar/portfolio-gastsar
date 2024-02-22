import { NavLink } from "react-router-dom";

const ActiveNavLink = ({ to, exact, children }) => {
  return (
    <NavLink
      to={to}
      exact={exact}
      className={({ isActive }) => (isActive ? 'active' : '')}
    >
      {children}
    </NavLink>
  );
};

export default ActiveNavLink;
