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
        <div key={course._id} className="card">
          <h3>{course.title}</h3>
          <p>{course.details}</p>
          <Link to={`/courses/${course.course_id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
