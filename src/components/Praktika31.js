import React, {useState} from 'react'
import { BsFillEmojiFrownFill, BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";

function Praktika31() {
  const [task, setTask] = useState(false);
  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{task ? <BsFillEmojiSmileUpsideDownFill /> : <BsFillEmojiFrownFill />} Make a cake</h5>
            <p className='card-text'></p>
            <button onClick={()=>setTask(!task)} type="button"
            className={task ? 'btn btn-light' : "btn btn-light"}>
              {task ? "Change Status" : "Change Status"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Praktika31
