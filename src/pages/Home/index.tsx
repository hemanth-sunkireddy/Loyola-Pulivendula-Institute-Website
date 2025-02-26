import { lazy } from "react";
import { Fade } from "react-awesome-reveal";
import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { title } from "process";
// Import the functions you need from the SDKs you need


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const HomePageStartBlock = lazy(() => import("../../components/HomePageStartBlock"));
const EventsLatestStartBlock = lazy(() => import("../../components/Events_Latest"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <HomePageStartBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        videourl={IntroContent.videourl}
        id="intro"
      />
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mt-20 mt-3">
       <div className="bg-[#F5F5DC] p-6 rounded-lg">
       <Fade direction="left" triggerOnce fraction={0.5}>
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="graphs.svg"
        id="about"
      />
      </Fade>
      </div>
      <div className="bg-green-200 p-6 rounded-lg">
      <Fade direction="right" triggerOnce fraction={0.5}>
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      </Fade>
      </div>
      </div>
      <EventsLatestStartBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        videourl={IntroContent.videourl}
        id="intro"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;