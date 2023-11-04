import React from 'react';
import { auth, githubProvider } from '../firebase';
import { useState, useEffect, useContext } from 'react';



  const AuthContext = React.createContext();

  export function useAuth() {
    return useContext(AuthContext);
  }

  export function AuthProvider ({ children }) {
    const [currentUser, setCurrentUser] = useState();
    function signIn(email, password) {
      return auth.signInWithEmailAndPassword(email, password);
    }
    function signUp(email, password) {
      return auth.createUserWithEmailAndPassword(email, password);
    }
    function signOut() {
      return auth.signOut();
    }
    function updateEmail(email) {
      return currentUser.updateEmail(email);
    }
    function updatePassword(password) {
      return currentUser.updatePassword(password);
    }
    function updateDisplayName(displayName) {
      return currentUser.updateProfile({ displayName });
    }
    function GitHubAuth() {
      var provider = githubProvider;
      auth.useDeviceLanguage();
      return auth.signInWithPopup(provider);
    }
  
    useEffect(() => {
      auth.onAuthStateChanged(setCurrentUser);
    }, []);
    const value = {
      currentUser,
      signIn,
      signUp,
      signOut,
      updateEmail,
      updatePassword,
      updateDisplayName,
    };

    return (
      <AuthContext.Provider
        value={value}
      >
        {children}
      </AuthContext.Provider>
    );
  }