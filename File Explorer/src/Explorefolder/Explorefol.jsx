import React from 'react'
import './Explorefol.css'
import { useState } from 'react';

const Explorefol = ({explorer}) => {
  const[expand, setExpand] = useState(false);
  if(explorer.type === 'Folder'){
    return(
      <>
      <div className="folder" onClick={()=>setExpand(!expand)}>📁 {explorer.name}</div>
      <div style={{display:expand?"block":"none", paddingLeft:"25px"}}>
        {
          explorer.children.map((child) => {
             return <Explorefol explorer = {child} key ={child.id}/>
          
             })  
        }
      </div> 
      </>
    )
  }
  else{
    return(
      <>
      <div className="file"> 🗄️{explorer.name}</div>
      </>
    )
  }
}

export default Explorefol