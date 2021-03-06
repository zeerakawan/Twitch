import { Link } from "react-router-dom";

import GoogleAuth from "../google login/GoogleAuth";

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
        <Link to={"/stream/new"} className="item">
          Create Stream
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
