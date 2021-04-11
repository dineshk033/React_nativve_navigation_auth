import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { Alert } from "react-native";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setSpinnerLoading(false);
    } else {
      setSpinnerLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setSpinnerLoading(true);
    setTimeout(
      () =>
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((u) => {
            setUser(u);
            setSpinnerLoading(false);
          })
          .catch((e) => {
            setSpinnerLoading(false);
            setError(e.toString());
          }),
      2000
    );
  };

  const onRegister = (email, password, repeatedPassword) => {
    setSpinnerLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        setSpinnerLoading(false);
      })
      .catch((e) => {
        setSpinnerLoading(false);
        setError(e.toString());
      });
  };
  const googleLogin = async () => {
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        Alert.alert(res.user);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading: spinnerLoading,
        error,
        onLogin,
        googleLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
