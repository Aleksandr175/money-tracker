import React from "react";
import "./App.css";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"logo.svg"} className="App-logo" alt="logo" />
      </header>

      <p>You are authenticated</p>

      <h1>Main screen</h1>

      <h2>Menu</h2>
      <Link to={`/app`}>Home</Link>
      <Link to={`/categories`}>Categories</Link>

      <h2>Transactions</h2>

      <FirebaseAuthConsumer>
        {/* @ts-ignore */}
        {({ isSignedIn, user, providerId }) => {
          return (
            <pre style={{ height: 300, overflow: "auto" }}>
              {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
            </pre>
          );
        }}
      </FirebaseAuthConsumer>
    </div>
  );
}

export default App;
