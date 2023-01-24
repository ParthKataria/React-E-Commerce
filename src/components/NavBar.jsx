import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { changeSearchField, changeUser } from "../store";
import Login from "./Login";
import Button from "./Button";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";

import Profile from "./Profile";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  let LINKS = [
    { name: "HOME", link: "/" },
    { name: "CATEGORIES", link: "/category" },
  ];
  return (
    <>
      <div className="shadow-md w-full sticky top-0 left-0 bg-gray-400">
        <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto  w-full md:w-auto md:pl-0 pl-9 top-[-490px]}`}
          >
            {LINKS.map(({ name, link }) => {
              return (
                <li className="md:ml-8 text-xl md:my-0 my-7">
                  <a>
                    <Link to={link}>{name}</Link>
                  </a>
                </li>
              );
            })}
          </ul>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto  w-full md:w-auto md:pl-0 pl-9 top-[-490px]}`}
          >
            {LoggedIn && (
              <>
                <button className="md:ml-8 text-xl md:my-0 my-7">
                  <AiOutlineHeart />
                </button>
                <Profile />
                <Link className="md:text-xl md:my-0 my-7 mx-5" to="/cart">
                  <AiOutlineShoppingCart />
                </Link>
              </>
            )}
            {!LoggedIn && <Login />}
            {LoggedIn && <Button onClick={handleLogout}>LOGOUT</Button>}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default NavBar;
