import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
const Profile = () => {
  const [dropdown, setDropdown] = useState(false);
  const divElement = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current) {
        return;
      }
      if (!divElement.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler);
  }, []);
  const handleClick = () => {
    setDropdown(!dropdown);
  };
  const { user } = useSelector((state) => {
    return { searchValue: state.searchField, user: state.user };
  });
  const { firstName, lastName, photoUrl } = user;
  return (
    <>
      <div ref={divElement} className="ml-5 mt-1 relative">
        <div>
          <button onClick={handleClick}>
            <CgProfile />
          </button>
        </div>
        {dropdown && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
            <div className="py-1 rounded-md bg-white shadow-xs">
              <div className="grid text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                <img className="rounded-full m-auto" src={photoUrl} />
                <div className="m-auto text-lg">
                  Signed In {firstName.toUpperCase()} {lastName.toUpperCase()}
                </div>
                <div className="m-auto"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Profile;
