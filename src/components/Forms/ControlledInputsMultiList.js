import React from "react";

export default function ControlledInputsMultiList(props) {
  return (
    <div className="border p-3">
      <h3>Mokinių sąrašas</h3>
      <ul className="list-group list-group-flush">
        {props.users.map((user) => {
          return (
            <li className="list-group-item text-left" key={user.id}>
              <span className="w-10 p-3">{user.name}</span>
              <span className="w-50 p-3">{user.surname}</span>
              <span className="w-50 p-3">{user.birthdate}</span>
              <span className="w-50 p-3">{user.city}</span>
              <span className="w-50 p-3">{user.module}</span>
              <span className="w-50 p-3">{user.group}</span>
              <button
                className="btn btn-danger float-right mx-2"
                onClick={() => props.deleteUser(user.id)}
              >
                Trinti
              </button>
              <button
                className="btn btn-info float-right"
                onClick={() => props.editUser(user)}
              >
                Redaguoti
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
