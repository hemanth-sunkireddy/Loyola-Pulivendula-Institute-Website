import { useEffect, useState } from "react";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import courseData from "../../content/SingleCourse.json";

interface CourseDetails {
  title: string;
  imageURL: string;
  vision: string;
  mission: string[];
  peos: string[];
}

const CourseSingle = () => {
  const [courseName, setCourseName] = useState<string | null>(null);
  const [courseDetails, setCourseDetails] = useState<CourseDetails | null>(null);

  useEffect(() => {
    // Retrieve the course name from localStorage when the component mounts
    const storedCourseName = localStorage.getItem("course-name");
    if (storedCourseName) {
      setCourseName(storedCourseName);
    }
  }, []); // Empty dependency array to run only once when the component mounts

  useEffect(() => {
    if (courseName) {
      // Match the course name with the imported JSON data
      const selectedCourse = courseData.find((course: { name: string }) => course.name === courseName);
      
      // Set the course details if a match is found
      if (selectedCourse) {
        setCourseDetails({
          title: selectedCourse.title,
          imageURL: selectedCourse.imageURL,
          vision: selectedCourse.vision,
          mission: selectedCourse.mission,
          peos: selectedCourse.peos
        });
      }
    }
  }, [courseName]); // Only run this when courseName changes

  return (
    <Container>
      {/* Render course details if they are available */}
      {courseDetails ? (
        <>
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">{courseDetails.title}</h1>
          {/* <img src={courseDetails.imageURL} alt={courseDetails.title} /> */}
          
          <h4 className="text-2xl font-medium text-gray-800 mt-6">Vision</h4>
          <p className="text-lg text-gray-700 mt-2">{courseDetails.vision}</p>
          
          <h4 className="text-2xl font-medium text-gray-800 mt-6">Mission</h4>
          <ul className="list-inside list-disc pl-6 mt-2">
            {courseDetails.mission.map((item, index) => (
              <li key={index} className="text-lg text-gray-700">{item}</li>
            ))}
          </ul>
          
          <h4 className="text-2xl font-medium text-gray-800 mt-6">Program Educational Objectives (PEOs)</h4>
          <ul className="list-inside list-disc pl-6 mt-2">
            {courseDetails.peos.map((item, index) => (
              <li key={index} className="text-lg text-gray-700">{item}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-lg text-gray-500">Loading course details...</p>
      )}

      <ScrollToTop />
    </Container>
  );
};

export default CourseSingle;
