import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store";
const Card = ({ item }) => {
  //   console.log(item);
  const { articles, images } = item;
  //   console.log(articles);
  const { code } = articles[0];
  //   console.log(images);
  const [{ url }, ...rest] = images;
  //   console.log(code);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      <img src={url} />
      <Link to={`/product/${code}`} state={item}>
        View Product
      </Link>
      <div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
      <div>
        <button>Add to favourites</button>
      </div>
    </div>
  );
};
export default Card;
