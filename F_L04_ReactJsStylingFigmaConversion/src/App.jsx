
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [screen, setScreen] = useState("login");

  return screen === "login" ? (
    <Login onSignupClick={() => setScreen("signup")} />
  ) : (
    <Signup onLoginClick={() => setScreen("login")} />
  );
}

export default App;
