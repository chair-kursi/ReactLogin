import fire from "./fire";
import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Hero from "./Hero";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import MyProjects from "./MyProjects";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-mail":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSingup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    alert('successfully logged out')
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else setUser("");
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? (
              <Hero handleLogout={handleLogout} setShowLogin={setShowLogin} />
            ) : (
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSingup={handleSingup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                showLogin={showLogin}
                setShowLogin={setShowLogin}
              />
            )}
          </Route>

          <Route path="/content">
            <section className="hero">
              <nav>
                <h2>Welcome</h2>
              </nav>
            </section>
            <h1 className="non__login content">
              Some more content!! (This is Route Demo)
            </h1>
          </Route>
          <Route path="/projects">
            <MyProjects />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
{
}
