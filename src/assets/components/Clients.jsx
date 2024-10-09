const reviews = [
  {
    name: "Rakesh Dutt",
    image: "/images/pic-1.jpg",
    text: '"Amazing experience with the best services. I would recommend everyone to book their trips with them."',
    location: "GULMARG",
  },
  {
    name: "Alice Smith",
    image: "/images/pic-2.jpg",
    text: '"This travel agency provides the excellents services for their customers and helps to plan the perfect vacation."',
    location: "PAHALGAM",
  },
  {
    name: "Ali Fazal",
    image: "/images/pic-3.jpg",
    text: '"Great customer service and fantastic trip planning. I would definitely book my next trip with them."',
    location: "SONAMARG",
  },
];

const Clients = () => {
  return (
    <>
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Clients Say
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer
                transform translation duration-300 hover:scale-110"
              >
                <img
                  src={review.image}
                  alt="review"
                  className="w-24 h-24 rounded-full mx-auto"
                />

                <h3 className="text-xl font-bold mb-2">{review.name}</h3>
                <p className="text-gray-600">{review.location}</p>
                <p className="text-gray-600 italic">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
