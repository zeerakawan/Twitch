import { Link } from "react-router-dom";

import OAuth from "./google login/OAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to={"/"} className="item">
        Twitch
      </Link>
      <div className="right menu">
        <Link to={"/"} className="item">
          All Streams
        </Link>
        <OAuth />
      </div>
    </div>
  );
};

export default Header;
