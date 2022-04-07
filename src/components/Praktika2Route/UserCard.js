import React from 'react'
import {Link} from "react-router-dom";

function UserCard({id, avatar_url, login}) {
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-4 text-center'>
      <img
      src={avatar_url}
      alt={login}
      width="140px"
      height="140px"
      className='rounded-circle'
      />
      <h2>{login}</h2>
      <p>
        <Link to={`/${login}`} className="btn btn-secondary">
          View details &raquo;
        </Link>
      </p>
    </div>
  );
}

export default UserCard;