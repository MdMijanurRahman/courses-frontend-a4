import { useState } from "react";
import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, loginWithGoogle, loginWithGitHub } = useAuth(); // Use all three methods
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const navigate =useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      // Redirect after successful login
      navigate("/courses");
    } catch (err) {
      setError("Failed to log in with Email/Password");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await loginWithGoogle();
      // Redirect after successful login
      // navigate("/courses");
    } catch (err) {
      setError("Failed to log in with Google");
    }
  
  };

  const handleGitHubLogin = async () => {
    setError("");
    try {
      await loginWithGitHub();
      // navigate("/courses");
      // Redirect after successful login
    } catch (err) {
      setError("Failed to log in with GitHub");
    }
  };

  return (
    <div>
      <h2>Please Login : to access courses menu.</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          className="bg-slate-200 px-2 py-2 mx-2 my-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="bg-slate-200 px-2 py-2 mx-2 my-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        /> <br/>
        <button type="submit" className=" ml-2 my-2 btn btn-outline btn-success">Email/Password Login</button>
        
      </form>
      <div></div>
      <button onClick={handleGoogleLogin} className=" ml-2 my-2 btn btn-outline btn-success">Login with Google</button><br/>
      <button onClick={handleGitHubLogin} className=" ml-2 my-2 btn btn-outline btn-success">Login with GitHub</button>
    </div>
  );
}
