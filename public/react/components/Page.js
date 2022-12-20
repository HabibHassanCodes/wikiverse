import React, { useState } from 'react';
import apiURL from '../api';


export const Page = (props) => {

    const [dataToDisplay, setDataToDisply] = useState(undefined);

    const handleClick = async () =>{
      const response = await fetch(`${apiURL}/wiki/${props.page.slug}`);
      const data = await response.json();
      console.log(data)
      setDataToDisply(data);
    }

  return <>
    <h3 className="headline" onClick={ handleClick }>{props.page.title}</h3>
    <div className='dataDump'>
      {
        dataToDisplay ? <div> <p>{dataToDisplay.author.name} </p>
        <p>{dataToDisplay.content}</p>
        <p>{dataToDisplay.createdAt} </p>
       </div> : ""
      }
      
    </div>

  </>
} 
	