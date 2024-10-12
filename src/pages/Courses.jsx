import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Courses() {
  const { currentUser } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://courses-back.vercel.app/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);

  if (!currentUser) {
    return <p>Please log in to view the courses.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      
      {courses.map((course) => (
        
        <div key={course._id} className="card m-2 p-2">
          <h1 className="text-3xl underline">{course.title}</h1><br/>
          <p className="text-justify">{course.details.slice(0, 250)}...</p>
          <Link to={`/courses/${course.course_id}`}> <button className=" py-2 px-2 m-2 btn btn-outline btn-info">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
