import Slider from "../components/Slider";
const Home = () => {
  const categories = ["Clothes", "Gadgets", "Electronics"];
  const content = categories.map((category) => {
    return (
      <div className="">
        <h1 className="mt-5 text-center text-8xl">{category}</h1>
        <Slider category={category} />
      </div>
    );
  });
  return content;
};
export default Home;
