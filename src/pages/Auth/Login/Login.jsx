import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const [userLoginData, setUserLoginData] = useState({
    username: "adarshbalika",
    password: "adarshBalika123",
  });
  const [passwordInputType, setPasswordInputType] = useState("password");

  const navigate = useNavigate();

  function handleUserLogin() {
    (async () => {
      try {
        const response = await axios.post("/api/auth/login", userLoginData);
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("username", userLoginData.username);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <section className="login_form_container d-flex">
      <div className="card-basic login_form app">
        <h2 className="t-align-center mt-2 mb-2">Login</h2>
        <div className="inp-container mb-1">
          <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
            Username
          </label>
          <input
            type="text"
            className={`inp login_inp_resize ecommerce-login-inp `}
            id="inp-email"
            placeholder="Enter your username"
            value={userLoginData.username}
            onChange={(e) =>
              setUserLoginData({ ...userLoginData, username: e.target.value })
            }
          />

          <div className="err-msg-container d-none">
            <span>
              <i className="fa fa-exclamation-circle err-icon"></i>Enter your
              username!
            </span>
          </div>
        </div>

        <div className="inp-container mb-1">
          <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
            Password
          </label>
          <input
            type={passwordInputType}
            className={`inp login_inp_resize ecommerce-login-inp`}
            id="inp-password"
            placeholder="Enter your password"
            value={userLoginData.password}
            onChange={(e) =>
              setUserLoginData({ ...userLoginData, password: e.target.value })
            }
          />

          {passwordInputType == "password" ? (
            <i
              className="fa-solid fa-eye login-inp-icon"
              onClick={() => setPasswordInputType("text")}
            ></i>
          ) : (
            <i
              className="fa-solid fa-eye-slash login-inp-icon"
              onClick={() => setPasswordInputType("password")}
            ></i>
          )}

          <div className="err-msg-container d-none">
            <span>
              <i className="fa fa-exclamation-circle err-icon"></i>Enter your
              password!
            </span>
          </div>
        </div>

        <div className="inp-container mb-1">
          <div className="d-flex login_checkbox_inp_container">
            <input type="checkbox" id="checkbox-termsPolicy" />
            <label className="inp-label login-checkbox-label-size inherit-clr">
              Remember Me
            </label>
          </div>

          <div className="err-msg-container d-none">
            <span>
              <i className="fa fa-exclamation-circle err-icon"></i>Accept our
              terms & policy before going forward!
            </span>
          </div>
        </div>

        <div className="inp-container ml-1 mb-1">
          <button
            className="btn cta-btn login_custom_btn"
            type="button"
            onClick={() => handleUserLogin()}
          >
            Login
          </button>
        </div>

        <div className="inp-container t-align-center mb-2">
          <NavLink className="t-decoration-none" to="/signup">
            <small className="create_acc_link">Create New Account</small>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Login;
