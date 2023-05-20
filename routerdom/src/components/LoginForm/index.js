import { useRef, useState } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const username = useRef("");
  const password = useRef("");
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  const onLoginSuccess = (userToken) => {
    Cookies.set("jwt_token", userToken, { expires: 30 });
    navigate("/", { replace: true });
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const userDeails = {
      username: username.current.value,
      password: password.current.value,
    };

    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDeails),
    };

    const response = await fetch(url, options);
    const responseData = await response.json();
    if (response.ok) {
      onLoginSuccess(responseData.jwt_token);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={username}
            placeholder="Enter Username"
            ref={username}
            // onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={password}
            placeholder="Enter Password"
            ref={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
