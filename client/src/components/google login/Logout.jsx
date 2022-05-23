import { GoogleLogout } from "react-google-login";
import React from "react";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const Logout = () => {
  const onLogoutSuccess = () => {
    console.log("LOGOUT SUCCESSFULLY! ");
  };
  return (
    <div className="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onLogoutSuccess}
      />
    </div>
  );
};

export default Logout;
