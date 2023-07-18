import React from "react";
import Clock from "./Clock";

function App(props) {
  const { loggedIn } = props;
  if(loggedIn === true) {
    return <Clock />;
  } else {
    return null;
  }
}

export default App;
