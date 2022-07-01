import React, { useEffect, useState } from "react";
import "./FollowContainer.css";
import { getAllUsers } from "../../features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";

import { FollowUserBox } from "../index";
import { useWindowWidth } from "../../pages/HomePage/HomePage";

function FollowContainer({ setShowFollowContainer }) {
  const users = useSelector((state) => state.users.users);
  const theme = useSelector((state) => state.users.theme);
  const dispatch = useDispatch();
  const { windowWidth } = useWindowWidth();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div
      className={`follow-unfollow-container ${
        theme == "dark" && "dark-theme-bg-clr"
      } ${windowWidth > 560 && "mt-2"}`}
    >
      <div
        className="d-flex justify-cont-between follow-heading-container"
        onClick={() =>
          windowWidth <= 560 && setShowFollowContainer((prev) => !prev)
        }
      >
        <h4 className="follow-container-title mb-1 ml-1">Who to follow?</h4>
        {windowWidth <= 560 && <i className="fa-solid fa-angle-down"></i>}
      </div>

      <ul className="follow-list-container list-style-none">
        {users.map((user) => {
          return <FollowUserBox key={user._id} user={user} />;
        })}
      </ul>
    </div>
  );
}

export default FollowContainer;
