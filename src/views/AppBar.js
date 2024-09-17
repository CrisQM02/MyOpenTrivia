import Icon from "@mdi/react";
import { mdiNotebook } from "@mdi/js";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="my-app-bar">
      <div className="bar-logo">
        <Icon className="material-icons bar-icon" path={mdiNotebook} />
        <h1>My Open Trivia!</h1>
      </div>
      <div className="bar-links">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="credits">Credits</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default AppBar;
