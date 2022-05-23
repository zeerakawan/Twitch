import { GoogleLogin } from "react-google-login";
import { useState } from "react";

import Logout from "./Logout";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const GoogleAuth = () => {
  const [status, setStatus] = useState(false);

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! CURRENT USER: ", res.profileObj.name);
    setStatus(true);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <div className="signInButton">
      {status ? (
        <Logout />
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText={"Login"}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default GoogleAuth;
