import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { changeSearchField } from "../store";
const NavBar = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => {
    // console.log(state);
    return { searchValue: state.searchField };
  });
  const handleChange = (event) => {
    dispatch(changeSearchField(event.target.value));
  };
  //   console.log(user);
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/category">Categories</Link>
        <input value={searchValue} onChange={handleChange} />
        <button>Search</button>
        <button>WishList</button>
        <button>Profile</button>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <button>Logout</button>
      </div>
      <Outlet />
    </>
  );
};
export default NavBar;
