import NavigationBar from "./components/navigation/navigation";
import Button from "./components/button/button";
import {useState} from 'react';
import { addUser, setAuthUser, setIsLogin } from './reducer/UserReducer';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function LoginPage(){
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useSelector((state) => state.User);

  console.log("users", users);
  const handleSubmit = (e) => {
    e.preventDefault();
    let searchIndex = users.findIndex(
      (e) => e.email === name && e.password === password
    );
    if (searchIndex !== -1) {
      dispatch(setAuthUser(users[searchIndex]));
      dispatch(setIsLogin(true));
      localStorage.setItem("token", name);
      navigate("/");
    } else {
      dispatch(setAuthUser({}));
      dispatch(setIsLogin(false));
      localStorage.removeItem("token", name);
      alert("Invalid Email and Password");
    }
  };
    return(
        <div>
            <NavigationBar/>
            <form onSubmit={handleSubmit}>
                <div class='signup-container'>
                        <div></div>
                            <div>Login <br></br><br></br> Get access to your orders, wishlists and recomendations.</div>
                        <div class='registration-form'>
                            <div>Email</div>
                            <div><input type='text' value={name}
            required
            onChange={(e) => setName(e.target.value)}></input></div>
                            <div>Password</div>
                            
                            <div><input type='text' value={password}
            required
            onChange={(e) => setPassword(e.target.value)}></input></div>
                            {/* <Button name='Login'/> */}
                            <button type='submit'>Login</button>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
            </form>
                
        </div>
    )
}

export default LoginPage;