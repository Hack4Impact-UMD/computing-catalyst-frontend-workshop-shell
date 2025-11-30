import NavBar from "../components/Navbar";
import Image from "../assets/profile.png";

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
            Welcome to the Chef's Kitchen! Here, you will find a collection of
            delicious recipes curated by our talented chef. From appetizers to
            desserts, each recipe is crafted with love and passion for cooking.
            Explore our recipe book to discover new flavors and culinary
            techniques that will elevate your cooking skills.{" "}
          </p>
          <br />
          <p>
            Hey everyone! Fresh out of culinary school with a serious
            sweet tooth, I’ve turned my passion for pastries into my profession.
            <br />
            <br />
            🌿 Matcha Lover: I’ve got a thing for matcha! It’s amazing how it
            turns the ordinary into the extraordinary. Whether it's in a frothy
            latte or a decadent dessert, I love experimenting with matcha to add
            a pop of color and a burst of flavor.
            <br />
            <br />
            🍰 Pastry Pro: Baking is where I shine. There’s nothing like the
            smell of fresh pastries in the morning, right? From airy croissants
            to intricate custom cakes, I put my heart into every batch. It’s
            about creating something beautiful and delicious that can make any
            day a little sweeter.
            <br />
            <br />
            🍝 Pasta Enthusiast: Okay, I’m not just about sweets—I’m a pasta
            enthusiast too! I love playing with pasta, dressing it up with
            everything from a simple garlic and oil to gourmet seafood sauces.
            It’s my go-to when I feel like bringing a bit of hearty comfort to
            the table.
            <br />
            <br />
            🌍 Adventurous Eater: I’m always on the lookout for new flavors to
            spice up my dishes. Every ingredient has a story, and I’m here to
            tell it through my creations. Whether it’s exploring local markets
            for fresh ingredients or trying out a bold new recipe, there’s
            always something cooking!
            <br />
            <br />
            Join me on this delicious journey, where we’ll explore the sweet and
            savory sides of life together. Let’s make every meal an adventure!
          </p>
          <p className=" mt-4">
            Whether you are a beginner or an experienced cook, our recipes are
            designed to inspire and guide you through the cooking process. Join
            us on this culinary journey and let's create something amazing
            together!
          </p>
        </div>
      </div>
    </>
  );
};
export default HomePage;
