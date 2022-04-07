import React, {useState} from 'react'

function Praktika3() {
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div>
      <p className="extra-content">
      If you aren't sure which way to do something, do it both ways and see which works better.
      </p>

  </div>

    const linkName=readMore?'Read Less < ':'Read More > '
  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
        <div className='card-body'>
            <h5 className='card.title'>React Read More/Less</h5>
            <p className='card-text'></p>
            <div className="Praktika3">
            Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.{readMore && extraContent}
            <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Praktika3
