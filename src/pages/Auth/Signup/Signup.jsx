import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Signup() {
  const [userSignupData, setUserSignupData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [checkSignup, setCheckSignup] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState("password");

  const navigate = useNavigate();
  const theme = useSelector((state) => state.users.theme);

  function handleSignup() {
    setCheckSignup(true);

    if (
      userSignupData.firstName &&
      userSignupData.lastName &&
      userSignupData.username &&
      userSignupData.password &&
      userSignupData.confirmPassword &&
      userSignupData.password == userSignupData.confirmPassword
    ) {
      (async () => {
        try {
          const response = await axios.post("/api/auth/signup", userSignupData);
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "username",
            `${userSignupData.firstName} ${userSignupData.lastName}`
          );
          localStorage.setItem("username", userSignupData.username);
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

  return (
    <>
      <section className="login_form_container d-flex">
        <div
          className={`card-basic login_form app ${
            theme == "dark" ? "dark-theme-bg-clr" : "white-bg-clr"
          }`}
        >
          <h2 className="t-align-center mt-2 mb-2">Signup</h2>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              First name
            </label>
            <input
              className={`inp login_inp_resize ecommerce-login-inp outline-none ${
                theme == "dark" && "dark-theme-bg-clr border-gray4-dark"
              }`}
              id="inp-email"
              placeholder="Enter your first name"
              type="text"
              value={userSignupData.firstName}
              onChange={(e) => {
                setUserSignupData({
                  ...userSignupData,
                  firstName: e.target.value,
                });
                setCheckSignup(false);
              }}
            />

            {!userSignupData.firstName && checkSignup && (
              <div className="err-msg-container">
                <span>
                  <i className="fa fa-exclamation-circle err-icon"></i>Enter
                  your first name
                </span>
              </div>
            )}
          </div>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              Last name
            </label>
            <input
              className={`inp login_inp_resize ecommerce-login-inp outline-none ${
                theme == "dark" && "dark-theme-bg-clr border-gray4-dark"
              }`}
              id="inp-email"
              placeholder="Enter your last name"
              type="text"
              value={userSignupData.lastName}
              onChange={(e) => {
                setUserSignupData({
                  ...userSignupData,
                  lastName: e.target.value,
                });
                setCheckSignup(false);
              }}
            />

            {!userSignupData.lastName && checkSignup && (
              <div className="err-msg-container">
                <span>
                  <i className="fa fa-exclamation-circle err-icon"></i>Enter
                  your last name
                </span>
              </div>
            )}
          </div>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              Username
            </label>
            <input
              className={`inp login_inp_resize ecommerce-login-inp outline-none ${
                theme == "dark" && "dark-theme-bg-clr border-gray4-dark"
              }`}
              id="inp-email"
              type="text"
              placeholder="Enter your username"
              value={userSignupData.username}
              onChange={(e) => {
                setUserSignupData({
                  ...userSignupData,
                  username: e.target.value,
                });
                setCheckSignup(false);
              }}
            />

            {!userSignupData.username && checkSignup && (
              <div className="err-msg-container">
                <span>
                  <i className="fa fa-exclamation-circle err-icon"></i>Enter
                  your username
                </span>
              </div>
            )}
          </div>

          <div className="inp-container mb-1 p-relative">
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              Password
            </label>
            <input
              type={passwordInputType}
              className={`inp login_inp_resize ecommerce-login-inp outline-none ${
                theme == "dark" && "dark-theme-bg-clr border-gray4-dark"
              }`}
              id="inp-password"
              placeholder="Enter password"
              value={userSignupData.password}
              onChange={(e) => {
                setUserSignupData({
                  ...userSignupData,
                  password: e.target.value,
                });
                setCheckSignup(false);
              }}
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

            {!userSignupData.password && checkSignup && (
              <div className="err-msg-container">
                <span>
                  <i className="fa fa-exclamation-circle err-icon"></i>Enter
                  your password
                </span>
              </div>
            )}
          </div>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              Confirm Password
            </label>
            <input
              type={confirmPasswordInputType}
              className={`inp login_inp_resize ecommerce-login-inp outline-none ${
                theme == "dark" && "dark-theme-bg-clr border-gray4-dark"
              }`}
              id="inp-email"
              placeholder="Enter your password again"
              value={userSignupData.confirmPassword}
              onChange={(e) => {
                setUserSignupData({
                  ...userSignupData,
                  confirmPassword: e.target.value,
                });
                setCheckSignup(false);
              }}
            />
            {confirmPasswordInputType == "password" ? (
              <i
                className="fa-solid fa-eye login-inp-icon"
                onClick={() => setConfirmPasswordInputType("text")}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash login-inp-icon"
                onClick={() => setConfirmPasswordInputType("password")}
              ></i>
            )}

            {!userSignupData.confirmPassword && checkSignup && (
              <div className="err-msg-container">
                <span>
                  <i className="fa fa-exclamation-circle err-icon"></i>Enter
                  your confirm password
                </span>
              </div>
            )}
          </div>

          <div className="inp-container mb-1">
            <div className="d-flex login_checkbox_inp_container">
              <input type="checkbox" id="checkbox-termsPolicy" />
              <label className="inp-label login-checkbox-label-size inherit-clr">
                I accept all Terms & Conditions
              </label>
            </div>
          </div>

          <div className="inp-container ml-1 mb-1">
            <button
              className="btn login_custom_btn btn-custom-sty"
              type="button"
              onClick={() => handleSignup()}
            >
              Signup
            </button>
          </div>

          <div className="inp-container t-align-center mb-2">
            <NavLink to="/login" className="t-decoration-none">
              <small
                className={`create_acc_link ${
                  theme == "dark" && "portfolio-url-dark-clr"
                }`}
              >
                Already have an account
              </small>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
