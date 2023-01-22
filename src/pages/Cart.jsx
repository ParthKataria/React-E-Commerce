import { useSelector } from "react-redux";
import Card from "../components/Card";
const Cart = () => {
  const { cartList } = useSelector((state) => {
    return {
      cartList: state.cart,
    };
  });
  // console.log(cartList);
  const content = cartList.map((item) => <Card item={item} />);
  return <div>{content}</div>;
};
export default Cart;
