import { lazy } from "react";
import MiddleBlockContent from "../../content/Courses.json"; // Assuming this is an array of course objects
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import MiddleBlock from "../../components/MiddleBlock";

const Courses = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-20 md:grid-cols-2 md:gap-10">
        {/* Dynamically render MiddleBlock for each course */}
        {MiddleBlockContent.map((course, index) => (
          <div key={index}>
            <MiddleBlock
              title={course.title}
              imageURL={course.imageURL}
              button={course.button}
            />
          </div>
        ))}
      </div>
      <ScrollToTop />
    </Container>
  );
};

export default Courses;
