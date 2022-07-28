import React, { useState } from "react";
import "./ProfileEditModal.css";
import { editUserDetails } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

function ProfileEditModal({ setShowModal, user }) {
  const [editUserData, setEditUserData] = useState({
    bio: user.bio || "",
    portfolio: user.portfolio || "",
  });
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const theme = useSelector((state) => state.users.theme);

  function handleEditUserData(token) {
    const userData = { ...user, ...editUserData };
    dispatch(editUserDetails({ userData, token }));
    setShowModal((prev) => !prev);
  }

  return (
    <div className="playlist-dropdown-container">
      <div
        className={`stacked-list list-style-none playlist-stacklist profile-edit-modal p-1 ${
          theme == "dark" && "dark-theme-bg-clr"
        }`}
      >
        <div
          className={`d-flex playlist-li-item videolib-list-container border-bottom j-space-between mb-1`}
        >
          <h3 className="break-word">Edit Profile</h3>
          <i
            className="fa-solid fa-rectangle-xmark cursor-p"
            onClick={() => setShowModal((prev) => !prev)}
          ></i>
        </div>

        <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-1">
          <label className="profile-edit-modal-inp-label">Bio</label>
          <input
            type="text"
            placeholder="Enter your bio"
            className={`profile-edit-modal-inp ${
              theme == "dark" && "dark-theme-bg-clr border-gray3-dark"
            }`}
            value={editUserData.bio}
            onChange={(e) =>
              setEditUserData({ ...editUserData, bio: e.target.value })
            }
          ></input>
        </div>

        <div className="d-flex flex-direction-col playlist-li-item cursor-p gap-small mb-2">
          <label className="profile-edit-modal-inp-label">Portfolio</label>
          <input
            type="text"
            placeholder="Enter your portfolio"
            className={`profile-edit-modal-inp ${
              theme == "dark" && "dark-theme-bg-clr border-gray3-dark"
            }`}
            value={editUserData.portfolio}
            onChange={(e) =>
              setEditUserData({ ...editUserData, portfolio: e.target.value })
            }
          ></input>
        </div>

        <div className="d-flex justify-cont-right">
          <button
            className="btn btn-custom-sty"
            onClick={() => handleEditUserData(token)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileEditModal;
