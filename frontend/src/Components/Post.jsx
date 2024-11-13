import React from 'react'
import I from "../Assets/Post.jpg"

export default function Post() {
  return (
    <div className='container post' >
     
      
      <p id='title'>Introduction to Machine Learning-Beginner </p>

      <br />
      <p id='username'>Asmara Shafi</p>
      <img src={I} alt="img" />
      <br /><br />
      <button className='btn btn-primary ' id='button'>Read More</button>
    </div>
  )
}
