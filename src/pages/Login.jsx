import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, loginWithGoogle, loginWithGitHub } = useAuth(); // Use all three methods
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      // Redirect after successful login
    } catch (err) {
      setError("Failed to log in with Email/Password");
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await loginWithGoogle();
      // Redirect after successful login
    } catch (err) {
      setError("Failed to log in with Google");
    }
  };

  const handleGitHubLogin = async () => {
    setError("");
    try {
      await loginWithGitHub();
      // Redirect after successful login
    } catch (err) {
      setError("Failed to log in with GitHub");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login with Email</button>
      </form>

      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleGitHubLogin}>Login with GitHub</button>
    </div>
  );
}
