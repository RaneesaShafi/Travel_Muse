import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BiLogoFacebook } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div
          className="relative h-screen bg-cover bg-center h-96"
          style={{ backgroundImage: "url('/images/contact-heroImg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center ">
            <h4 className="text-4xl font-bold text-white md:text-6xl mt-20">
              Contact Us
            </h4>
            <div className="flex gap-8 text-white text-6xl mt-12 ">
              <IoLocationOutline className="transform translation duration-300 hover:scale-110" />{" "}
              <MdOutlineCall className="transform translation duration-300 hover:scale-110" />
              <AiOutlineMessage className="transform translation duration-300 hover:scale-110" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Contact Details</h3>
              <div className="flex items-center mb-4">
                <FaRegEnvelope className="text-blue-500 mr-2 text-xl" />
                <p>info@travelmuse.com</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-blue-500 mr-2 text-lg" />

                <p>+19 7882524731</p>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-500 mr-2 text-lg" />

                <p>Travel city,Srinagar,Jammu&Kashmir, India</p>
              </div>
              <div className="flex items-center mb-4">
                <FiInstagram className="text-blue-500 mr-2 text-xl" />

                <p>Travel_Muse India</p>
              </div>
              <div className="flex items-center mb-4">
                <BiLogoFacebook className="text-blue-500 mr-2 text-2xl" />

                <p>Travel Muse India</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Get in touch</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name=""
                    placeholder="Write message"
                    id=""
                    className="w-full p-2 border border-gray-300 rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-2 px-2 bg-blue-500 text-white rounded"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
