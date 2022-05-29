import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { connect } from "react-redux";
import { signIn, signOut } from "../../redux/actions/actions";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const GoogleAuth = (props) => {
  const [authStatus, setAuthStatus] = React.useState(null);
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          clientId: clientId,
          scope: "email",
        })
        .then(() => {
          const auth = gapi.auth2.getAuthInstance();
          setAuthStatus(auth);
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (status) => {
    if (status) {
      props.signIn();
    } else {
      props.signOut();
    }
  };

  const onLogin = () => {
    // this signin function is taken from google api library (not the action)
    authStatus.signIn();
  };

  const onLogout = () => {
    // this signout function is taken from google api library (not the action)
    authStatus.signOut();
  };

  return (
    <div>
      {props.isSignedIn ? (
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

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GoogleAuth);
