import Slider from "../components/Slider";
const Home = () => {
  const categories = ["Clothes", "Gadgets", "Electronics"];
  const content = categories.map((category) => {
    return (
      <div className="m-5">
        <h1 className="text-center text-9xl">{category}</h1>
        <Slider category={category} />
      </div>
    );
  });
  return content;
};
export default Home;
