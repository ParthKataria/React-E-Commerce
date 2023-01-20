import { useParams } from "react-router";
import { useFetchItemDetailsQuery } from "../store";
const CardDetails = ({ item }) => {
  //   const val = useSelector((state) => console.log(state));
  const { id } = useParams();
  //   console.log(id, item);
  const { data, isFetching, error } = useFetchItemDetailsQuery(id);

  let content;
  if (isFetching) {
    content = "Loading...";
  } else {
    const { product } = data;
    const { name, description } = product;
    console.log(data);
    content = (
      <div>
        {name}
        <div>{description}</div>
      </div>
    );
  }
  return content;
};
export default CardDetails;
