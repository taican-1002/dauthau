import React from "react";
import MHeader from "../../../../modules/Auth/components/MHeader";
import MFooter from "../../../../modules/Auth/components/MFooter";

function LoginLayout(props) {
  return (
    <>
      <MHeader />
      <>{props.children}</>
      <MFooter />
    </>
  );
}

export default LoginLayout;
