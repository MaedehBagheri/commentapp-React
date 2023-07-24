
import { NavLink, withRouter } from "react-router-dom";
import "./Navigation.css"
function Navigation() {
  const items = [
    { name: "Home", to: "/", exact: true },
    { name: "New Comment", to: "/new-comment" },
  ];
  return (
 <header  >
     <nav>
      <ul className="navbar">
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
 </header>
  );
}

export default withRouter(Navigation);