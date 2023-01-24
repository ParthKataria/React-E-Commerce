import { signInWithGooglePopup } from "../firebase/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../store";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logUser = async () => {
    try {
      const { _tokenResponse } = await signInWithGooglePopup();
      dispatch(changeUser(_tokenResponse));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return <Button onClick={logUser}>LOGIN</Button>;
};
export default Login;
