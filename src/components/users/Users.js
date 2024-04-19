import React from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeFromUsers } from "../../context/usersSlice";
import Edit from "../editmodule/Edit";
import { edit } from "../../context/editSlice";

function Users({ data }) {
  const dispatch = useDispatch();
  return (
    <div className="users__wrapper">
      {data?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.profession}</p>
          <p>{user.age} years old</p>
          <div className="user__btns">
            <button onClick={() => dispatch(removeFromUsers(user))}>
              Remove
            </button>
            <button
              onClick={() => dispatch(edit())}
              className="user__edit__btn"
            >
              Edit...
            </button>
          </div>
        </div>
      ))}
      <Edit />
    </div>
  );
}

export default Users;
