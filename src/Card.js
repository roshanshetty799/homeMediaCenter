import React from 'react';
import 'tachyons';


const Card = function ({id, name, email,imageName,link}) {
  return(
    <a href={`http://${link}`} target='_blank' >
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src = {require(`./assetsImages/${imageName}`)}/> 
      <div>

    {/*  <h2> {name} </h2>
    <p> {email} </p>  */}
      </div>
    </div>
     </a>
  );

}

export default Card
