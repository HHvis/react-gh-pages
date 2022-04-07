import React, {useState} from 'react'

function Card(props) {
    
    console.log(props);
    let {id, pic, headline, status, statusChange } = props;
    return (
    <div className="col col-lg-4 col-md-4">
    <div className="card shadow-sm">
        <img src={pic}></img>
        <div className="card-body">
        <p className='card-text'>{headline}</p>
            <p className='card-text'>{status ? " Ismokau" : " Mokausi"}</p>
                <button onClick={()=>statusChange(id)} type="button"
                className="btn btn-light">OK
                </button>
            </div>
        </div>
    </div>
  )
}
export default Card