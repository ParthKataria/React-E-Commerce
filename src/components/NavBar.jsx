import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from "../store";
const NavBar = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => {
    console.log(state);
    return { searchValue: state.searchField };
  });
  const handleChange = (event) => {
    dispatch(changeSearchField(event.target.value));
  };
  //   console.log(user);
  return (
    <div>
      <input value={searchValue} onChange={handleChange} />
      <button>Search</button>
      <button>WishList</button>
      <button>Profile</button>
      <button>Cart</button>
      <button>Login</button>
      <button>Register</button>
      <button>Logout</button>
    </div>
  );
};
export default NavBar;
