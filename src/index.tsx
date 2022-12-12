import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import the functions you need from the SDKs you need
//import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Login } from "./Login";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCp08g-ova8vVtIeKSlfVUWUC9_q154aBY",
  authDomain: "moneytracker-2ba52.firebaseapp.com",
  projectId: "moneytracker-2ba52",
  storageBucket: "moneytracker-2ba52.appspot.com",
  messagingSenderId: "475978681732",
  appId: "1:475978681732:web:69500bf67a7ab3febaa1d1",
  measurementId: "G-BD6V8FW0G9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
//const auth = firebase.auth();

const Context = createContext({
  db: null,
  app: null,
  auth: null,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/categories",
    element: <div>Edit categories</div>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// @ts-ignore
root.render(
  // @ts-ignore
  <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
    <div>
      <button
        onClick={() => {
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(googleAuthProvider);
        }}
      >
        Sign In with Google
      </button>
      <button
        data-testid="signin-anon"
        onClick={() => {
          firebase.auth().signInAnonymously();
        }}
      >
        Sign In Anonymously
      </button>
      <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        Sign Out
      </button>
      <div>
        <IfFirebaseAuthed>
          {() => {
            return <RouterProvider router={router} />;
          }}
        </IfFirebaseAuthed>
        <IfFirebaseAuthedAnd
          // @ts-ignore
          filter={({ providerId }) => providerId !== "anonymous"}
        >
          {/* @ts-ignore */}
          {({ providerId }) => {
            return <div>You are authenticated with {providerId}</div>;
          }}
        </IfFirebaseAuthedAnd>
      </div>
    </div>
  </FirebaseAuthProvider>
);
