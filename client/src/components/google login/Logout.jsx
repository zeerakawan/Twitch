import { GoogleLogin } from "react-google-login";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = () => {
    console.log("LOGOUT SUCCESSFULLY!");
  };
  return (
    <div className="signOutButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={"Logout with Google"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
