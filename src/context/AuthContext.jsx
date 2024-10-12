import { createContext, useContext, useEffect, useState } from "react";
import { 
  GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "firebase/auth";
import { auth } from "../firebaseConfig"; // Import from firebaseConfig.js
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate(); 

  // Email/Password Register
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Email/Password Login
  function login(email, password) {
    
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google Sign-in
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    // <Navigate to="/" />
    return signInWithPopup(auth, provider);
  }

  // GitHub Sign-in
  function loginWithGitHub() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  }

  // Logout
  function logout() {
    return signOut(auth);
  }

  // Manage user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      // if (user) {
      //   // If the user is logged in, redirect to the home page
      //   navigate("/courses");
      // }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    register,
    login,
    loginWithGoogle,
    loginWithGitHub,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
