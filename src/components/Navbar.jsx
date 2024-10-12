import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.jpeg"

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav>
      <div className="flex justify-between items-center bg-slate-500 ">
        <div className='flex'>
          <img src={logo} alt="Logo" className='w-20 h-20 text-center' />
          <span className="ml-10 md:ml-2 text-white-600 text-3xl md:text-wrap">Mijan Training Institute: Learn for excellence.</span>
        </div>
        <div>
          <Link to="/"> <button className="ml-2 btn btn-outline btn-info">Home</button>



          </Link> 
          {currentUser && <Link to="/courses"><button className="ml-2 my-2 btn btn-outline btn-info">Courses</button>
            </Link>}
        </div>
        <div className="py-5">
          {!currentUser ? (
            <>
              <Link to="/login"><button className="btn btn-outline btn-accent">Login</button></Link> 
              <Link to="/register"><button className="ml-2 mr-2 btn btn-outline btn-accent">Register</button></Link>
            </>
          ) : (
            <>
              <img src={currentUser.photoURL} alt={currentUser.displayName} className=" mx-auto h-10 w-10 mr-20 md:m-15" />
              <p className=" mx-auto mr-2">{currentUser.email}</p>
              <button onClick={logout} className="mt-2 btn btn-outline btn-error ">Logout</button>
              

            </>
          )}
        </div>
      </div>
    </nav>
  );
}
