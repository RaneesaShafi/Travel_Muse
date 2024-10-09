const destinations = [
  {
    image: "/images/dal-lake.png",
    title: "Dal Lake,Srinagar",
    destinations:
      " Dal Lake in Srinagar is a timeless testament to the natural beauty, historical significance, and cultural richness of Kashmir. From its serene waters to its lush surroundings, the lake exudes an aura of tranquility and splendor that captivates the senses and nourishes the soul.",
  },
  {
    image: "/images/gulmarg.jpg",
    title: "Gulmarg",
    destinations:
      "Gulmarg has attracted millions of tourists throughout its existence with the scenic beauty of the Himalayan Mountains in the back drop. One of the main attractions in Gulmarg is the Gulmarg Gondola, the Highest Cable Car in the world.",
  },
  {
    image: "/images/pahalgam.jpg",
    title: "Pahalgam",
    destinations:
      "Pahalgam, a picturesque town often dubbed 'Mini Switzerland'. This charming destination draws renown for its breathtaking landscapes, lush green meadows, and snow-capped mountains, resembling the Swiss Alps strikingly.",
  },
  {
    image: "/images/gurez.jpg",
    title: "Gurez Valley ",
    destinations:
      "Gurez Valley is a captivating and somewhat hidden destination located in the northern part of Jammu and Kashmir, India. It is in close proximity to LOC. The valley is renowned for its breathtaking landscapes, featuring deep gorges, towering peaks, and vibrant meadows that are unlike any other in India.",
  },
];

const Destinations = () => {
  return (
    <>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Popular Destinations
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
                <img
                  src={place.image}
                  alt="destinations"
                  className="w-full h-48 object-cover transform translation duration-300 hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{place.title}</h3>
                  <p className="text-gray-600">{place.destinations}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
