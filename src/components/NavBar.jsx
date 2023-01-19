import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { changeSearchField, changeUser } from "../store";
const NavBar = () => {
  const dispatch = useDispatch();
  const { searchValue, user } = useSelector((state) => {
    // console.log(state);
    return { searchValue: state.searchField, user: state.user };
  });
  const handleLogout = () => {
    dispatch(changeUser(null));
  };
  const handleChange = (event) => {
    dispatch(changeSearchField(event.target.value));
  };
  let LoggedIn = false;
  if (Boolean(user)) {
    LoggedIn = true;
  }
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/category">Categories</Link>
        <input value={searchValue} onChange={handleChange} />
        <button>Search</button>
        {LoggedIn && <button>WishList</button>}
        {LoggedIn && <button>Profile</button>}
        {LoggedIn && <Link to="/cart">Cart</Link>}
        {!LoggedIn && <Link to="/login">Login</Link>}
        {LoggedIn && <button onClick={handleLogout}>Logout</button>}
      </div>
      <Outlet />
    </>
  );
};
export default NavBar;
