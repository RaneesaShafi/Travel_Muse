const About = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/images/airplane-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center ">
          <h4 className="text-4xl font-bold text-white md:text-6xl mt-20 transform translation duration-300 hover:scale-110">
            About Us
          </h4>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <img
              src="/images/airplane-hero.jpg"
              alt="about us"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="txt-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              We are a passionate travel agency committed to provide the best
              travel experiences for our clients.Our team of dedicated
              professionals work tirelssly to ensure your trips are seamless and
              unforgettable.
            </p>

            <h3 className="txt-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              Our mission is to create amazing travel experiences that inspire
              the lives of our clients.We believe in personalized
              service,attention to detail and providing exceptional value.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
