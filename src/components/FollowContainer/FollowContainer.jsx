import React, { useEffect } from "react";
import "./FollowContainer.css";
import { getAllUsers } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function FollowContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="follow-unfollow-container mt-2">
      <h4 className="mb-1 ml-1">Who to follow?</h4>

      <ul className="follow-list-container list-style-none">
        {users.map((user) => {
          return (
            <li className="d-flex justify-cont-between li-item border-none">
              <div
                className="d-flex"
                onClick={() => navigate(`/profile/${user._id}`)}
              >
                <img className="avatar xs" src={user.avatar} alt="avatar" />
                <div className="d-flex list-content">
                  <h4>{`${user.firstName} ${user.lastName}`}</h4>
                  <small>@{user.username}</small>
                </div>
              </div>
              <button className="btn btn-text mb-1 follow-btn-link">
                Follow +
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FollowContainer;
