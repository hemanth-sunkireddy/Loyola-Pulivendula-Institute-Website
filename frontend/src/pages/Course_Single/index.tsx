import { useEffect, useState } from "react";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";

const CourseSingle = () => {
  const [courseName, setCourseName] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the course name from localStorage when the component mounts
    const storedCourseName = localStorage.getItem("course-name");
    if (storedCourseName) {
      setCourseName(storedCourseName);
    }
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <Container>
      {/* Display greeting and course name */}
      <p>HI</p>
      {/* Conditionally render course name if it's available in localStorage */}
      {courseName ? (
        <h5>Course Name: {courseName}</h5>
      ) : (
        <h5>No course selected</h5>
      )}
      <ScrollToTop />
    </Container>
  );
};

export default CourseSingle;
