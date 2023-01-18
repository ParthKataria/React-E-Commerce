import { useParams } from "react-router-dom";
const CategoryElement = () => {
  console.log(useParams());
  const { id } = useParams();
  //   console.log(id);
  return <div> {id}</div>;
};
export default CategoryElement;
