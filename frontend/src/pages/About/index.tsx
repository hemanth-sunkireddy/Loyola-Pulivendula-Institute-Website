import { useEffect, useState } from "react";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import aboutContent from "../../content/History.json"; // Import the About.json file

const About = () => {
  const [aboutHistory, setAboutHistory] = useState<any>(null);

  useEffect(() => {
    // Here, we simply load the historical content from the imported JSON
    setAboutHistory(aboutContent);
  }, []);

  return (
    <Container>
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
