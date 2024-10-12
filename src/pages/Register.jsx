import { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Correct import here

export default function Register() {
  const { register } = useAuth(); // use register method from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(email, password);
      // Redirect or display a success message
    } catch (err) {
      setError("Failed to create an account");
    }
  };

  return (
    <div>
      <h2 className="mx-2 my-2">Please Register Yourself...</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
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
        /><br/>
        <button type="submit" className=" ml-2 btn btn-outline btn-success">Register</button>
        

      </form>
    </div>
  );
}
