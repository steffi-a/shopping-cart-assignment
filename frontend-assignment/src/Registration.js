import NavigationBar from "./components/navigation/navigation";
import Button from "./components/button/button";
import './Registration.css';
import {useState} from 'react';
import { addUser, setAuthUser, setIsLogin } from './reducer/UserReducer';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Registration(){
    const dispatch = useDispatch();
  let navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const { users } = useSelector((state) => state.User);
  console.log("User", users);

  const handleSubmit = (e) => {
      alert('clicked on submit')
    e.preventDefault();

    if (password.length <= 8) {
      alert("Password must be of 9 characters");
      return;
    }
    if (password !== cnfPassword) {
      alert("Password do not match");
      return;
    }

    const user = {
      fname,
      lname,
      email,
      password,
    };

    dispatch(addUser(user));
    dispatch(setAuthUser(user));
    dispatch(setIsLogin(true));
    navigate("/");

    localStorage.setItem("token", email);
  };
    return(
        <div>
            
            <NavigationBar/>
            <form onSubmit={handleSubmit}>
                <div class='signup-container'>
                    <div></div>
                        <div>Signup <br></br><br></br> We don't share your private details with anyone</div>
                
                    <div class='registration-form'>
                        <div>First Name</div>
                        <div><input type='text' value={fname}
                            required
                            onChange={(e) => setFname(e.target.value)}/>
                        </div>
                        <div>Last Name</div>
                        <div><input type='text' value={lname}
                            required
                            onChange={(e) => setLname(e.target.value)}/>
                        </div>
                        <div>Email</div>
                        <div><input value={email}
                                required
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>Password</div>
                        <div><input type='text' type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div>Confirm password</div>
                        <div><input type='text' type="password"
                            value={cnfPassword}
                            onChange={(e) => setCnfPassword(e.target.value)}/>
                        </div>
                        {/* <Button type="submit" name='Sign Up' /> */}
                        <button type='submit'>Sign up</button>
                    </div>
                    
                    <div></div>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default Registration;