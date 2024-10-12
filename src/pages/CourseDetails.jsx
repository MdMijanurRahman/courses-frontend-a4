import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams(); // Get course ID from URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch course details by ID from the backend
    fetch(`https://courses-back.vercel.app/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!course) {
    return <p>No course details available.</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6">
        
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{course.title}</h1>
        <img
          src={course.img_url}
          alt={course.title}
          className="w-full h-auto object-cover rounded-t-lg mb-4"
        />
        <p className="text-lg text-gray-700 mb-4">{course.details}</p>
        
        {/* Course Meta Info */}
        <div className="grid grid-cols-2 gap-4 text-gray-600">
          <div>
            <h2 className="text-xl font-semibold">Duration:</h2>
            <p>{course.duration}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Price:</h2>
            <p>${course.price}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Instructor:</h2>
            <p>{course.author}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Level:</h2>
            <p>{course.level}</p>
          </div>
        </div>
        
        {/* Optional Additional Info */}
        {course.extra_info && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Additional Information:</h2>
            <p>{course.extra_info}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
