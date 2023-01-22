import { useParams } from "react-router";
import { useFetchItemDetailsQuery } from "../store";
import { useLocation } from "react-router";
const CardDetails = () => {
  const { state } = useLocation();
  const { images } = state;
  console.log(images);
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
        <img src={images[0].url} />
        {name}
        <div>{description}</div>
      </div>
    );
  }
  return content;
};
export default CardDetails;
