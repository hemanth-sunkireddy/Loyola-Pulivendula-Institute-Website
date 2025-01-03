import MiddleBlockContent from "../../content/Events.json"; // Assuming this is an array of event objects
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";

const Events = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 md:gap-10 gap-8">
        {/* Dynamically render event content */}
        {MiddleBlockContent.map((event, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
            {/* Event Image */}
            <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${event.imageURL})` }}></div>
            <div className="p-4">
              {/* Event Title */}
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600">{event.title}</h3>
              {/* Event Name */}
              <p className="mt-2 text-gray-600">{event.name}</p>
              {/* Conditionally render the button if it exists */}
            </div>
          </div>
        ))}
      </div>
      <ScrollToTop />
    </Container>
  );
};

export default Events;
