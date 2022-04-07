import React, {useState} from 'react'

function Praktika2() {
    const [like, setLike] = useState(0);
    const [hate, setHate] = useState(0);
    const [reset, setReset] = useState();
  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
        <div className='card-body'>
            <h5 className='card.title'>React vertinimas</h5>
            <p className='card-text'></p>
            <button onClick={()=>setLike(like +1)} type="button" className='btn btn-success m-1'> Like {like} </button>
            <button onClick={()=>setHate(hate +1)} type="button" className='btn btn-danger m-1'> Hate {hate} </button>
            <button onClick={()=>setReset(setHate(0),setLike(0))} type="button" className='btn btn-dark m-1'> Reset {reset} </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Praktika2
