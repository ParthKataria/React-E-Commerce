import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { changeSearchField, changeUser } from "../store";
import { signInWithGooglePopup } from "../firebase/firebaseAuth";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logUser = async () => {
    try {
      const { _tokenResponse } = await signInWithGooglePopup();
      dispatch(changeUser(_tokenResponse));
    } catch (err) {
      console.log(err);
    }
  };
  const { searchValue, user } = useSelector((state) => {
    return { searchValue: state.searchField, user: state.user };
  });
  const handleLogout = () => {
    dispatch(changeUser(null));
    navigate("/");
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
      <nav className="bg-gray-400 h-20  md:flex md:items-center md:justify-start ">
        <Link className="ml-5 " to="/">
          Home
        </Link>
        <Link className="ml-5" to="/category">
          Categories
        </Link>
        <input className="" value={searchValue} onChange={handleChange} />
        <div className="inline">
          <AiOutlineSearch />
        </div>
        {LoggedIn && (
          <div className="ml-5">
            <AiOutlineHeart />
          </div>
        )}
        {LoggedIn && (
          <button className="ml-5 ">
            <CgProfile />
          </button>
        )}
        {LoggedIn && (
          <Link className="ml-5 " to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        )}
        {!LoggedIn && (
          <button className="ml-5 justify-self-end" onClick={logUser}>
            Login
          </button>
        )}
        {LoggedIn && (
          <button className="ml-5 " onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
      <Outlet />
    </>
  );
};
export default NavBar;
