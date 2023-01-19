import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
const CategoryElement = () => {
  //   console.log(useParams());
  const { id } = useParams();
  //   console.log(id);
  return (
    <div>
      {/* {" "} */}
      <CardList category={id} />
    </div>
  );
};
export default CategoryElement;
