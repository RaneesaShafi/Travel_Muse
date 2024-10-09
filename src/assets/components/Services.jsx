import { FaPlane } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";
import { FaConciergeBell } from "react-icons/fa";

const services = [
  {
    icon: <FaPlane className="text-4xl text-blue-500" />,
    title: "Flight Booking",
    destinations:
      "We provide the best flight booking services to our customers. We have a wide range of options to choose from.",
  },
  {
    icon: <FaHotel className="text-4xl text-blue-500" />,
    title: "Hotel Booking",
    destinations:
      "Book hotels at the best prices with our exclusive deals and discounts.",
  },
  {
    icon: <GiMountainClimbing className="text-4xl text-blue-500" />,
    title: "Hiking Adventures",
    destinations: "Hiking adventures to the most beautiful places in Kashmir.",
  },
  {
    icon: <FaConciergeBell className="text-4xl text-blue-500" />,
    title: "Concierge Services",
    destinations:
      "Get personalized concierge services with our expert team to make your trip memorable.",
  },
];

const Services = () => {
  return (
    <>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer
                transform translation duration-300 hover:scale-110"
              >
                <div className="mb-4">{service.icon}</div>

                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.destinations}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
