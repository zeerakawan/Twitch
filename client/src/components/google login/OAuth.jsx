import React, { useEffect } from "react";
import { gapi } from "gapi-script";

import GoogleAuth from "./GoogleAuth";

const clientId =
  "803388915075-428terbvbhf35v6vmhr2lpadnc6jtkuv.apps.googleusercontent.com";

const OAuth = () => {
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  });

  return (
    <div>
      <GoogleAuth />
    </div>
  );
};

export default OAuth;
