import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { HomePageStartBlockProps } from "./types";
import { Button } from "../../common/Button";
import { useNavigate } from "react-router-dom";

const HomePageStartBlock = ({
  videourl,
  title,
  content,
  button,
  t,
  id,
  direction,
}: HomePageStartBlockProps) => {
  const navigation = useNavigate();

  return (
    <section className="py-12 bg-white">
      <Fade direction={direction} triggerOnce>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id={id}>
            {/* First Grid: Welcome content and buttons */}
            <div className="flex flex-col justify-center space-y-6">
              <h6 className="text-5xl font-extrabold font-mono" style={{color: "#414886"}}>{t(title)}</h6>
              <p className="text-1xl text-black font-extrabold">{t(content)}</p>
              {direction === "right" && (
                <div className="flex space-x-4">
                  {Array.isArray(button) &&
                    button.map((item, id) => (
                      <Button
                        key={id}
                        color={item.color}
                        onClick={() => navigation(item.url)}
                        // className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
                      >
                        {t(item.title)}
                      </Button>
                    ))}
                </div>
              )}
            </div>

            {/* Second Grid: Video */}
            <div className="flex justify-center">
              <iframe
                className="w-full sm:h-80 lg:h-96 rounded-md shadow-lg"
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

export default withTranslation()(HomePageStartBlock);
