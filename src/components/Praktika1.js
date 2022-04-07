import React, {useState} from 'react'

export default function Task() {
  const [task, setTask] = useState(false);
  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{task ? "Uzduotis atlikta" : "Uzduotis neatlikta"}</h5>
            <p className='card-text'> Cia galima iterpti teksta</p>
            <button onClick={()=>setTask(!task)} type="button"
            className={task ? 'btn btn-success' : "btn btn-danger"}>
              {task ? "Atlikta" : "Pazymeti uzduoties atlikima"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
