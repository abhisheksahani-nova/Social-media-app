import React, { useEffect } from "react";
import "./FollowContainer.css";
import {
  getAllUsers,
} from "../../features/users/usersSlice";
import { useSelector, useDispatch } from "react-redux";

import {FollowUserBox} from "../index";

function FollowContainer() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="follow-unfollow-container mt-2">
      <h4 className="follow-container-title mb-1 ml-1">Who to follow?</h4>

      <ul className="follow-list-container list-style-none">
        {users.map((user) => {
          return <FollowUserBox key={user._id} user={user} />
        })}
      </ul>
    </div>
  );
}

export default FollowContainer;
