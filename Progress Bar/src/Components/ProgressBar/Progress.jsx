import React, { useEffect, useState } from 'react'
import './Progress.css'

const Progress = ({value}) => {
  const[limit, setLimit] = useState(value);

  useEffect(() =>{
    setLimit(Math.min(100, Math.max(0, value)))
  },[value])
  return (
    <div className='progress'>
      <div style={{width: `${value}%`}}>
        <span style={{color:limit>49?'white':'black'}}>{limit}%</span>
      </div>
    </div>
  )
}

export default Progress