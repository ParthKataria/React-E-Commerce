import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { changeSearchField, changeUser } from "../store";
import { signInWithGooglePopup } from "../firebase/firebaseAuth";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logUser = async () => {
    try {
      const { _tokenResponse } = await signInWithGooglePopup();
      //   console.log(_tokenResponse);
      dispatch(changeUser(_tokenResponse));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
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
      <div className="bg-gray-400 h-16 p-5 flex lex-row justify-items-end">
        <Link className="ml-5" to="/">
          Home
        </Link>
        <Link className="ml-5" to="/category">
          Categories
        </Link>
        <input className="" value={searchValue} onChange={handleChange} />
        <button>Search</button>
        {LoggedIn && <button className="ml-5">WishList</button>}
        {LoggedIn && <button className="ml-5">Profile</button>}
        {LoggedIn && (
          <Link className="ml-5" to="/cart">
            Cart
          </Link>
        )}
        {!LoggedIn && (
          <button className="ml-5 " onClick={logUser}>
            Login
          </button>
        )}
        {LoggedIn && (
          <button className="ml-5" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
      <Outlet />
    </>
  );
};
export default NavBar;
