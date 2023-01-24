import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
const CategoryElement = () => {
  const { id } = useParams();
  return (
    <div>
      <CardList category={id} />
    </div>
  );
};
export default CategoryElement;
