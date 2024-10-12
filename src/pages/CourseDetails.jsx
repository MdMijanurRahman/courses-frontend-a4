import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`https://courses-back.vercel.app/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.details}</p>
      <p>{course.author}</p>
      {/* Display other course details */}
    </div>
  );
}
