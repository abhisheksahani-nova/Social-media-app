import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  followUser,
  UnfollowUser,
  getAllUsers,
} from "../../features/users/usersSlice";
import "./FollowUserBox.css";

const defaultProfilePic =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

function FollowUserBox({ user }) {
  const { _id, avatar, lastName, firstName, username } = user;
  const following = useSelector((state) => state.users.following);
  const [isFollowing, setIsFollowing] = useState(false);

  const token = localStorage.getItem("token");
  const theme = useSelector((state) => state.users.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkFollowing = following.find((user) => user._id == _id);
    if (checkFollowing && checkFollowing.followers.length > 0) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [following]);

  function handleFollowUser(id, token) {
    if (isFollowing) {
      if (username !== localStorage.getItem("username")) {
        dispatch(UnfollowUser({ id, token }));
      }
    } else {
      if (username !== localStorage.getItem("username")) {
        dispatch(followUser({ id, token }));
      }
    }
    dispatch(getAllUsers());
  }

  return (
    <li key={_id} className="d-flex justify-cont-between li-item border-none">
      <div className="d-flex" onClick={() => navigate(`/profile/${_id}`)}>
        <img
          className="avatar xs"
          src={avatar ? avatar : defaultProfilePic}
          alt="avatar"
        />
        <div className="d-flex list-content">
          <h4>{`${firstName} ${lastName}`}</h4>
          <small>@{username}</small>
        </div>
      </div>

      <button
        className={`btn btn-text mb-1 follow-btn-link ${
          theme == "dark" && "text-dark-theme-clr"
        }`}
        onClick={() => handleFollowUser(_id, token)}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </li>
  );
}

export default FollowUserBox;
