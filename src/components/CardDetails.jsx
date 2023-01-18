import { useFetchItemDetailsQuery } from "../store";
const CardDetails = ({ item }) => {
  //   console.log(item);
  const { articles, images } = item;
  //   console.log(articles);
  const { code } = articles[0];
  //   console.log(images);
  const [{ url }, ...rest] = images;
  //   console.log(code);
  const { data, isFetching, error } = useFetchItemDetailsQuery(code);
  let content;
  if (isFetching) {
    content = "Loading...";
  } else {
    // const { results } = data;
    content = <img src={url} />;
  }
  //   console.log(data);
  return <div>{content}</div>;
};
export default CardDetails;
