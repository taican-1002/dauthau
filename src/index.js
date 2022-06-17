<<<<<<< HEAD
import "./common/assets/styles/index.scss";
=======
import "./common/assets/style/index.scss";
>>>>>>> 78f6fa99f3374ed8ae186985313d54629e8e8074

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
