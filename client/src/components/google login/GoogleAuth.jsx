import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { connect } from "react-redux";
import { signIn, signOut } from "../../redux/actions/actions";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const GoogleAuth = (props) => {
  const [status, setStatus] = React.useState(null);
  const [signedStatus, setSignedStatus] = React.useState(null);

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
      const auth = window.gapi.auth2.getAuthInstance();
      setStatus(auth.isSignedin.get());
    };

    gapi.load("client:auth2", start);
    console.log(status);
  }, [status]);

  const onAuthChange = (status) => {
    if (status) {
      props.signIn();
    } else {
      props.signOut();
    }
  };

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
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default connect(null, {
  signIn,
  signOut,
})(GoogleAuth);
