import MiddleBlockContent from "../../content/Infrastructure.json"; // Assuming this is an array of course objects
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";

const Infrastructure = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16 md:grid-cols-2 md:gap-12">
        {/* Dynamically render content for each course */}
        {MiddleBlockContent.map((course, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
            <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${course.imageURL})` }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600">{course.title}</h3>
              {/* Conditionally render button if it exists */}
              {course.button && (
                <button className="mt-4 py-2 px-4 bg-indigo-600 text-white text-sm rounded-full hover:bg-indigo-700 transition duration-300">
                  {course.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <ScrollToTop />
    </Container>
  );
};

export default Infrastructure;
