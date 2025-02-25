import { useEffect, useState } from "react";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import aboutContent from "../../content/History.json";
import MiddleBlockContent from "../../content/People.json";
import { SvgIcon } from "../../common/SvgIcon";

const About = () => {
  const [aboutHistory, setAboutHistory] = useState<any>(null);

  useEffect(() => {
    setAboutHistory(aboutContent);
  }, []);

  return (
    <Container>
      {/* Single row with four columns: Principal, Vice Principal, Correspondent */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 md:grid-cols-2 md:gap-12">
        {MiddleBlockContent.map((person, index) => (
          <div key={index} className="flex flex-col items-center text-center p-5 rounded-lg">
            <div 
              className="w-40 h-40 rounded-full bg-cover bg-center mb-4" 
              style={{ backgroundImage: `url(${person.imageURL})` }}
            ></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{person.title}</h3>
            <p className="text-lg text-gray-600">{person.name}</p>
            {person.button && (
              <a
                href={person.linkURL || "#"}
                className="mt-4 py-2 px-6 bg-indigo-600 text-white text-sm rounded-full hover:bg-orange-500 transition duration-300"
              >
                {person.button}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Render historical content */}
      {aboutHistory ? (
        <section className="mt-12 space-y-10 flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-800">Loyola History</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center text-left">
            <div>
              <img src="/img/Jesuits.png" alt="Loyola History" className="w-10/12 rounded-lg shadow-lg" />
            </div>
            <div className="md:col-span-2">
              <p className="text-base font-semibold text-black leading-relaxed">{aboutHistory["loyola-history"]}</p>
            </div>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-800">College History</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center text-left">
            <div className="md:col-span-2">
              <p className="text-base text-black font-semibold leading-relaxed">{aboutHistory["college-history"]}</p>
            </div>
            <div>
              <img src="/img/Collage.png" alt="College History" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      ) : (
        <p className="text-lg text-gray-600 text-center">Loading about information...</p>
      )}

      <ScrollToTop />
    </Container>
  );
};

export default About;
