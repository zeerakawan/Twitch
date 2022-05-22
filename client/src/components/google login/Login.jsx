import { GoogleLogin } from "react-google-login";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! CURRENT USER: ", res.profileObj.name);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <div className="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
