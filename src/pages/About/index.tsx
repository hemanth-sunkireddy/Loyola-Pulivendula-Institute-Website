import { useEffect, useState } from "react";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import aboutContent from "../../content/History.json";
import MiddleBlockContent from "../../content/People.json";

const About = () => {
  const [aboutHistory, setAboutHistory] = useState<any>(null);

  useEffect(() => {
    // Load historical content from the imported JSON
    setAboutHistory(aboutContent);
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16 md:grid-cols-2 md:gap-12">
        {/* Dynamically render each item from MiddleBlockContent */}
        {MiddleBlockContent.map((course, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
            <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${course.imageURL})` }}></div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600">{course.title}</h3>
              <p className="mt-2 text-gray-600">{course.name}</p>
              {/* Conditionally render button if it exists */}
              {course.button && (
                <a
                  href={course.linkURL || "#"}
                  className="mt-4 inline-block py-2 px-4 bg-indigo-600 text-white text-sm rounded-full hover:bg-orange-500 transition duration-300"
                >
                  {course.button}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Render historical content */}
      {aboutHistory ? (
        <section className="mt-12 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Jesuits History</h2>
            <p className="text-gray-700">{aboutHistory["jesuits-history"]}</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">College History</h2>
            <p className="text-gray-700">{aboutHistory["college-history"]}</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Loyola History</h2>
            <p className="text-gray-700">{aboutHistory["loyola-history"]}</p>
          </div>
        </section>
      ) : (
        <p className="text-gray-600">Loading about information...</p>
      )}

      <ScrollToTop />
    </Container>
  );
};

export default About;
