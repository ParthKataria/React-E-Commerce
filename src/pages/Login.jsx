import { signInWithGooglePopup } from "../firebase/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../store";
const Login = () => {
  const dispatch = useDispatch();
  const logUser = async () => {
    try {
      const { _tokenResponse } = await signInWithGooglePopup();
      //   console.log(_tokenResponse);
      dispatch(changeUser(_tokenResponse));
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
