import React, { useEffect, useState } from "react";
import { Navbar, Sidebar, FollowContainer, Post } from "../../components/index";
import "./Profile.css";
import { ProfileEditModal } from "../../components/index";
import { useParams } from "react-router-dom";
import { getUserById } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [userPosts, setUserPosts] = useState();
  const user = useSelector((state) => state.users.user);
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  let { id } = useParams();
  const signInUser = localStorage.getItem("username");

  useEffect(() => {
    dispatch(getUserById({ id }));
  }, [id, showModal]);

  return (
    <div>
      <Navbar />
      <section className="d-flex gap-4">
        <Sidebar />

        {showModal && (
          <ProfileEditModal setShowModal={setShowModal} user={user} />
        )}

        <div className="user-profile-middle-container p-2">
          <div className="d-flex flex-direction-col gap-1 ">
            <section className="d-flex justify-cont-center ">
              <div className="profile-page-container card-basic profile-card">
                <div className="d-flex mb-2">
                  <img
                    className="avatar md"
                    src={user.avatar}
                    alt="user avatar"
                  />
                </div>
                <div className="d-flex flex-direction-col">
                  <h2>{`${user.firstName} ${user.lastName}`}</h2>
                  <p className="profile-para-text mb-1">@{user.username}</p>
                  <p className="profile-para-text mb-small">{user.bio}</p>
                  <p className="profile-para-text mb-2">
                    <a href={user.portfolio}>{user.portfolio}</a>
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

            <div>
              {posts
                .filter((post) => post.username == user.username)
                .map((post) => {
                  return <Post key={post._id} post={post} />;
                })}
            </div>
          </div>
        </div>
        <FollowContainer />
      </section>
    </div>
  );
}

export default Profile;
