import { signInWithGooglePopup } from "../firebase/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../store";
import { useNavigate } from "react-router-dom";
const Login = () => {
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
  return (
    <div>
      <h1>Login</h1>
      <button onClick={logUser}>LogIn Google</button>
    </div>
  );
};
export default Login;
