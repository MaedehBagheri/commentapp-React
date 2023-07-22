
import { NavLink, withRouter } from "react-router-dom";
function Navigation() {
  const items = [
    { name: "Home", to: "/", exact: true },
    { name: "New Comment", to: "/new-comment" },
  ];
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default withRouter(Navigation);