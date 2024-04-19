import React from "react";
import "./Edit.css";
import { useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { edit } from "../../context/editSlice";

function Edit() {
  let dispatch = useDispatch();
  let editModule = useSelector((s) => s.edit.value);

  return (
    <div className={`edit ${editModule ? "show" : ""}`}>
      <button className="edit__img" onClick={() => dispatch(edit())}>
        <FaXmark />
      </button>
      <form>
        <div>
          <h4>name</h4>
          <input type="text" className="input__name" />
        </div>
        <div>
          <h4>age</h4>
          <input type="age" className="input__age" />
        </div>
        <div>
          <h4>profession</h4>
          <input type="profession" className="input__profession" />
        </div>
        <div>
          <h4>gender</h4>
          <select name="" id="">
            <option value="">gender</option>
            <option value="">male</option>
            <option value="">fmale</option>
          </select>
        </div>
        <button className="edit__btn">change</button>
      </form>
    </div>
  );
}

export default Edit;
