import NavBar from "./NavBar";
import Categories from "./Categories";
import CardList from "./CardList";
import Slider from "./Slider";
const App = () => {
  return (
    <div>
      App
      <NavBar />
      {/* <Categories /> */}
      <CardList category={"men_all"} />
      <Slider />
    </div>
  );
};
export default App;
