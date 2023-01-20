import { Link } from "react-router-dom";
const Card = ({ item }) => {
  //   console.log(item);
  const { articles, images } = item;
  //   console.log(articles);
  const { code } = articles[0];
  //   console.log(images);
  const [{ url }, ...rest] = images;
  //   console.log(code);
  return (
    <div>
      <img src={url} />
      <Link to={`/product/${code}`}>View Product</Link>
    </div>
  );
};
export default Card;
