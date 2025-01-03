import { useEffect, useState } from "react";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import aboutContent from "../../content/History.json";
import MiddleBlockContent from "../../content/People.json";
import AboutBlock from "../../components/AboutBlock";

const About = () => {
  const [aboutHistory, setAboutHistory] = useState<any>(null);

  useEffect(() => {
    // Here, we simply load the historical content from the imported JSON
    setAboutHistory(aboutContent);
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:grid-cols-2">
        {/* Dynamically render MiddleBlock for each course */}
        {MiddleBlockContent.map((course, index) => (
          <div key={index}>
            <AboutBlock
              linkURL={course.linkURL}
              title={course.title}
              imageURL={course.imageURL}
              button={course.button}
              name={course.name}
            />
          </div>
        ))}
      </div>
      {/* Render historical content */}
      {aboutHistory ? (
        <section>
          <h4>Jesuits History</h4>
          <p>{aboutHistory["jesuits-history"]}</p>

          <h4>College History</h4>
          <p>{aboutHistory["college-history"]}</p>

          <h4>Loyola History</h4>
          <p>{aboutHistory["loyola-history"]}</p>
        </section>
      ) : (
        <p>Loading about information...</p>
      )}

      <ScrollToTop />
    </Container>
  );
};

export default About;
