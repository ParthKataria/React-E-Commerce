import NavBar from "./NavBar";
import Categories from "./Categories";
import Slider from "./Slider";
const App = () => {
  return (
    <div>
      App
      <NavBar />
      <Categories list={["Men", "Women", "Kids"]} />
      <Slider />
    </div>
  );
};
export default App;
