import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { HomePageStartBlockProps } from "./types";
import { useNavigate } from "react-router-dom";

const EventsLatestStartBlock = ({
  videourl,
  t,
  id,
  direction,
}: HomePageStartBlockProps) => {
  const navigation = useNavigate();

  const events = [
    { id: 1, date: "19-02-2025", description: <>SBTET-AP Diploma Exams March/April 2025: Applications open for C-23, C-20, C-16, ER-91, ER-2020 schemes. <a href="https://sbtet.ap.gov.in/APSBTET/adimissionpdfs.do?mode=downloadPDFFile&filename=DiplomaexamsMarApril25Notification.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Click here</a> for more details.</> },
    { id: 2, date: "2025-02-21", description: "Event description 2" },
    { id: 3, date: "2025-02-22", description: "Event description 3" },
    { id: 4, date: "2025-02-23", description: "Event description 4" },
    { id: 5, date: "2025-02-24", description: "Event description 5" },
  ];

  return (
    <section className="py-12 bg-white">
      <Fade direction={direction} triggerOnce>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id={id}>
            {/* First Grid: Latest News and Events */}
            <div className="flex flex-col justify-center space-y-6">
              <h6 className="text-4xl font-extrabold font-mono" style={{ color: "#414886" }}>
                {t("Events and Notifications")}
              </h6>
              <div className="border-2 border-black">
                {events.map((item) => (
                  <div key={item.id} className="flex border-b border-gray-500 p-2">
                    <span className="text-lg font-medium w-1/4 pr-2">{item.date}</span>
                    <span className="text-black text-base pl-4 w-3/4">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Grid: Video */}
            <div className="flex justify-center">
              <iframe
                className="w-10/12 sm:h-80 lg:h-96 rounded-md shadow-lg h-5/6"
                src="https://www.youtube.com/embed/fFXliHpgBiU?si=DZEVfNHegdz-Wbdm&amp;start=98"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default withTranslation()(EventsLatestStartBlock);
