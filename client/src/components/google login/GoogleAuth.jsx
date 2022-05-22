import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";

import Login from "./Login";
import Logout from "./Logout";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  });

  // const Login = () => {
  //   const onSuccess = (res) => {
  //     console.log("LOGIN SUCCESS! CURRENT USER: ", res.profileObj.name);
  //     // setIsSignedIn(true);
  //   };

  //   const onFailure = (res) => {
  //     console.log("LOGIN FAILED! res: ", res);
  //   };

  //   return (
  //     <div className="signInButton">
  //       <GoogleLogin
  //         clientId={clientId}
  //         buttonText="Login with Google"
  //         onSuccess={onSuccess}
  //         onFailure={onFailure}
  //         cookiePolicy={"single_host_origin"}
  //         isSignedIn={true}
  //       />
  //     </div>
  //   );
  // };

  // const Logout = () => {
  //   const onSuccess = () => {
  //     console.log("LOGOUT SUCCESSFULLY!");
  //     setIsSignedIn(false);
  //   };
  //   return (
  //     <div className="signOutButton">
  //       <GoogleLogin
  //         clientId={clientId}
  //         buttonText={"Logout with Google"}
  //         onLogoutSuccess={onSuccess}
  //       />
  //     </div>
  //   );
  // };

  // const checkLoginCondition = () => {
  //   if (isSignedIn === true) {
  //     return Logout;
  //   } else if (isSignedIn === false) {
  //     return Login;
  //   } else {
  //     console.log("error");
  //   }
  // };
  return (
    <div>
      <Login />
      {/* <Logout /> */}
    </div>
  );
};

export default GoogleAuth;
