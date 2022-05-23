import React, { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const GoogleAuth = () => {
  const [status, setStatus] = React.useState(null);
  const [signedStatus, setSignedStatus] = React.useState(null);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
      const auth = window.gapi.auth2.getAuthInstance();
      setStatus(auth);

      const isSignedStatus = auth.isSignedin.get();
      setSignedStatus(isSignedStatus);
    };

    gapi.load("client:auth2", start);
  }, []);

  const onLogin = () => {
    status.signIn();
    setSignedStatus(!signedStatus);
  };

  const onLogout = () => {
    status.signOut();
    setSignedStatus(!signedStatus);
  };

  return (
    <div>
      {signedStatus ? (
        <button className="ui red google button" onClick={onLogout}>
          <i className="google icon" />
          Logout
        </button>
      ) : (
        <button className="ui red google button" onClick={onLogin}>
          <i className="google icon" />
          Login
        </button>
      )}
    </div>
  );
};

export default GoogleAuth;
