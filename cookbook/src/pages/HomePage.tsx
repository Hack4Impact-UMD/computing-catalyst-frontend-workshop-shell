import NavBar from "../components/Navbar";
import Image from "../assets/profile.png";
/*
  Can you replace the current profile image with an image of yourself?
*/

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Chef's Kitchen!
        </h1>
        <h4 className="text-gray-600 text-lg">
          Discover delicious recipes and culinary inspiration.
        </h4>
      </div>
      <div className="flex justify-center space-x-20 mt-10">
        <div className="w-70 h-70 rounded-full overflow-hidden border border-gray-200 shadow-lg">
          <img
            src={Image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-200 p-10 bg-gray-200 h-124 overflow-auto">
          <h1 className="text-3xl">Meet The Chef 🍴</h1>

          <p className="text-gray-700 text-lg mt-4">
            Tell us more about yourself!
          </p>
          {/*
              TODO:
              Create three paragraphs discussing anything about yourself!
          */}
        </div>
      </div>
    </>
  );
};
export default HomePage;
