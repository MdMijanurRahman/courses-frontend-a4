import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.jpeg"

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav> 
      <div className="flex justify-between items-center bg-zinc-500 ">
      <div className='flex'>
        <img src={logo} alt="Logo" className='w-10 h-10 text-center' />
        <span className="ml-10 text-white-600 text-3xl">Mijan Training Institute: Learn for the betterment, learn for excellence.</span>
      </div>

      <div>
        <Link to="/">Home</Link>
        {currentUser && <Link to="/courses">Courses</Link>}
      </div>
      <div>
        {!currentUser ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <img src={currentUser.photoURL} alt={currentUser.displayName} className=" mx-auto h-20 w-20" />
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
      </div>
    </nav>
  );
}
