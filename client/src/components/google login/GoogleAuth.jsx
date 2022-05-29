import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { connect } from "react-redux";

import { signIn, signOut } from "../../redux/actions/actions";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const GoogleAuth = ({ isSignedIn, signIn, signOut, id }) => {
  const [authStatus, setAuthStatus] = React.useState(null);
  const [userId, setUserId] = React.useState(null);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          clientId: clientId,
          scope: "email",
        })
        .then(() => {
          // getting signedin boolean value
          const auth = gapi.auth2.getAuthInstance();
          setAuthStatus(auth);

          // taking userid from gapi and storing into state
          setUserId(auth.currentUser.get().getId());
          //trigerring the reducer functions to change the status
          onAuthChange(auth.isSignedIn.get());

          //listennig the auth changes, so we can change the button conditionss
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  console.log(userId);
  const onAuthChange = (status) => {
    if (status) {
      signIn(userId);
    } else {
      signOut();
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
      {isSignedIn ? (
        <button className="ui red google button" onClick={onLogout}>
          <i className="google icon" />
          Logout {id}
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
    id: state.auth.userId,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GoogleAuth);
