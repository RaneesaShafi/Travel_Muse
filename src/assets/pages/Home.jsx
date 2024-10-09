import Destinations from "../components/Destinations";
import Services from "../components/Services";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-center"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-6xl font-bold text-white mb-8  transform translation duration-300 hover:scale-110">
            Explore the Exquisite Beauty of Kashmir
          </h2>
          <p className="text-lg md:text-2xl text-white mb-8">
            Discover amazing places at exclusive deals!!
          </p>
          <button
            className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-green-500 
          transform transition duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>

      <Destinations />
      <Services />
      <Clients />
    </div>
  );
};

export default Home;
