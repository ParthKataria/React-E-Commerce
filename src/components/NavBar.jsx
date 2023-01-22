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
      //   console.log(_tokenResponse);
      dispatch(changeUser(_tokenResponse));
      // navigate("/");
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
      {/* <nav className="bg-gray-400 md:flex md:items-center md:justify-start">
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
          <div className="ml-5 justify-self-end" onClick={logUser}>
            Login
          </div>
        )}
        {LoggedIn && (
          <button className="ml-5 " onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav> */}
      <nav class="p-5 bg-gray-400 shadow md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center ">
          <Link to="/" class=" mx-4 my-6 md:my-0 text-xl hover:text-white">
            HOME
          </Link>
          <Link
            to="/category"
            class="mx-4 my-6 md:my-0 text-xl hover:text-white"
          >
            CATEGORIES
          </Link>
          <input
            class=" my-6 md:my-0 text-xl hover:text-white rounded width-[400px]"
            value={searchValue}
            onChange={handleChange}
          />
          <button class="">
            <AiOutlineSearch size={30} />
          </button>
        </div>

        <div class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  top-[-400px] transition-all ease-in duration-500">
          {LoggedIn && (
            <button className="ml-5 ">
              <AiOutlineHeart size={30} />
            </button>
          )}
          {LoggedIn && (
            <button className="ml-5 ">
              <CgProfile size={30} />
            </button>
          )}
          {LoggedIn && (
            <Link className="ml-5 " to="/cart">
              <AiOutlineShoppingCart size={30} />
            </Link>
          )}
          {!LoggedIn && (
            <button
              class="bg-black text-white duration-500 px-6 py-2 mx-4 hover:bg-gray-600"
              onClick={logUser}
            >
              Login
            </button>
          )}
          {LoggedIn && (
            <button
              class="bg-black text-white duration-500 px-6 py-2 mx-4 hover:bg-gray-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default NavBar;
