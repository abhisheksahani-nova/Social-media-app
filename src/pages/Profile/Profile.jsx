import React, { useEffect, useState } from "react";
import { Navbar, Sidebar, FollowContainer, Post } from "../../components/index";
import "./Profile.css";
import { ProfileEditModal } from "../../components/index";
import { useParams } from "react-router-dom";
import { getUserById, editUserDetails } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useWindowWidth } from "../HomePage/HomePage";

const defaultProfilePic =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFollowContainer, setShowFollowContainer] = useState(false);
  const { windowWidth } = useWindowWidth();
  const user = useSelector((state) => state.users.user);
  const posts = useSelector((state) => state.posts.posts);
  const theme = useSelector((state) => state.users.theme);
  const dispatch = useDispatch();
  let { id } = useParams();
  const signInUser = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getUserById({ id }));
  }, [id, showModal]);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (profileImg) {
      const userData = { ...user, avatar: profileImg };
      dispatch(editUserDetails({ userData, token }));
      dispatch(getUserById({ id }));
    }
  }, [profileImg]);

  return (
    <div>
      <Navbar setShowSidebar={setShowSidebar} windowWidth={windowWidth} />
      <section className="d-flex page-main-container gap-4 responsive-gap">
        {windowWidth > 810 || showSidebar ? <Sidebar /> : null}

        {showModal && (
          <ProfileEditModal setShowModal={setShowModal} user={user} />
        )}

        <div className="mt-2 postbox-main-container">
          <div className="d-flex flex-direction-col gap-1 ">
            <section className="d-flex justify-cont-center ">
              <div
                className={`profile-page-container card-basic profile-card ${
                  theme == "dark" && "dark-theme-bg-clr"
                }`}
              >
                <div className="d-flex mb-2 p-relative">
                  <img
                    className="avatar md object-fit-cover"
                    src={user.avatar ? user.avatar : defaultProfilePic}
                    alt="user avatar"
                  />

                  {user.username == signInUser && (
                    <label htmlFor="input-img">
                      <i className="fa-solid fa-camera select-img-icon"></i>
                    </label>
                  )}

                  <input
                    className="d-none"
                    type="file"
                    accept="image/*"
                    id="input-img"
                    onChange={(e) => imageHandler(e)}
                  />
                </div>
                <div className="d-flex flex-direction-col">
                  <h2>{`${user.firstName} ${user.lastName}`}</h2>
                  <p className="profile-para-text mb-1">@{user.username}</p>
                  <p className="profile-para-text mb-small">{user.bio}</p>
                  <p className="profile-para-text mb-2">
                    <a
                      className={`${
                        theme == "dark" && "portfolio-url-dark-clr"
                      }`}
                      href={user.portfolio}
                    >
                      {user.portfolio}
                    </a>
                  </p>
                </div>

                {user.username == signInUser && (
                  <button
                    className="btn btn-custom-sty"
                    onClick={() => setShowModal((prev) => !prev)}
                  >
                    Edit
                  </button>
                )}
              </div>
            </section>

            <div
              className={`d-flex j-content-right p-relative ${
                showFollowContainer && "mb-4"
              }`}
            >
              {windowWidth <= 560 && !showFollowContainer ? (
                <div
                  className={`d-flex gap-2 follow-title-container ${
                    theme == "dark" && "dark-theme-bg-clr border-gray3-dark"
                  }`}
                  onClick={() => setShowFollowContainer((prev) => !prev)}
                >
                  <h4 className="follow-container-title ml-1">
                    Who to follow?
                  </h4>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
              ) : (
                windowWidth <= 560 &&
                showFollowContainer && (
                  <FollowContainer
                    setShowFollowContainer={setShowFollowContainer}
                  />
                )
              )}
            </div>

            <div className="d-flex flex-direction-col gap-1">
              {posts
                .filter((post) => post.username == user.username)
                .map((post) => {
                  return <Post key={post._id} post={post} />;
                })}
            </div>
          </div>
        </div>
        {windowWidth > 560 && <FollowContainer />}
      </section>
    </div>
  );
}

export default Profile;
