import React, {useState} from "react";


export const News = () => {
  
  
  return <div>
    <div>
      <input placeholder="search" /><button>find</button>
    </div>
    <ul>
      {['Vovan', 'Savva'].map(n => <li>{n}</li>)}
    </ul>
    <div>
      <h2>Username</h2>
      <div>Details</div>
    </div>
  </div>

 } 

 export default News;