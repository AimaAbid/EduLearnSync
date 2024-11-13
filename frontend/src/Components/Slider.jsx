import React from 'react'
import G1 from '../Assets/G1.jpg'
import G2 from '../Assets/G2.jpg'
import G3 from '../Assets/G3.jpg'
import G4 from '../Assets/G4.jpeg'
import G5 from '../Assets/G5.jpg'
import G6 from '../Assets/G6.jpg'
import G7 from '../Assets/G7.jpg'
import G8 from '../Assets/G8.jpg'
import G9 from '../Assets/G9.jpg'
import G10 from '../Assets/G10.jpg'
import G11 from '../Assets/G11.jpeg'
import G12 from '../Assets/G12.jpg'
import G13 from '../Assets/G13.jpg'

import G15 from '../Assets/G15.jpg'
import G16 from '../Assets/G16.jpg'
import G17 from '../Assets/G17.jpg'
import G18 from '../Assets/G18.jpg'


import './Slider.css';
var count=0;



export default function Slider() {
  return (
    <div className='container  ' id='cnt'>
      <div id="cont">
        <button className='btn btn-outline-dark' onClick={prev}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
        <img src={G1} alt="pic" className='big-image' id='bigImage' />
        <button className='btn btn-outline-dark'onClick={next}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>

        <br /><br /><br /><br />
        <div >
        <img src={G1} alt="pic" className='image' onClick={()=>{fun(0)}} />
        <img src={G2} alt="pic" className='image' onClick={()=>{fun(1)}} />
        <img src={G3} alt="pic" className='image' onClick={()=>{fun(2)}} />
        <img src={G4} alt="pic" className='image'  onClick={()=>{fun(3)}} />    
        <img src={G5} alt="pic" className='image'  onClick={()=>{fun(4)}} />    
        <img src={G6} alt="pic" className='image'  onClick={()=>{fun(5)}} />    
        <img src={G7} alt="pic" className='image'  onClick={()=>{fun(6)}} />    
        <img src={G8} alt="pic" className='image'  onClick={()=>{fun(7)}} />    
        <img src={G9} alt="pic" className='image'  onClick={()=>{fun(8)}} />    
        <img src={G10} alt="pic" className='image'  onClick={()=>{fun(9)}} />  
		<img src={G11} alt="pic" className='image' onClick={()=>{fun(10)}} />
        <img src={G12} alt="pic" className='image' onClick={()=>{fun(11)}} />
        <img src={G13} alt="pic" className='image' onClick={()=>{fun(12)}} />
        <img src={G13} alt="pic" className='image'  onClick={()=>{fun(13)}} />    
        <img src={G15} alt="pic" className='image'  onClick={()=>{fun(14)}} />    
        <img src={G16} alt="pic" className='image'  onClick={()=>{fun(15)}} />    
        <img src={G17} alt="pic" className='image'  onClick={()=>{fun(16)}} />    
        <img src={G18} alt="pic" className='image'  onClick={()=>{fun(17)}} />       
        </div>
    </div>
  )
}

function fun(i){
// document.getElementById('bigImage').src=document.getElementsByClassName('image')[i].src;
var arr=document.getElementsByClassName('image');
document.getElementById('bigImage').src=arr[i].src;
}

function prev(){
  var arr=document.getElementsByClassName('image');
 if(count===0){
  //reset
  count=arr.length-1;
  document.getElementById('bigImage').src=arr[count].src;
  console.log("inside if: "+count);

 }
 else if(count!==0){
  
 count--;
 console.log(count)
 document.getElementById('bigImage').src=arr[count].src;
 }
}

function next(){
  var arr=document.getElementsByClassName('image');
 
 
  if(count<arr.length-1){
    
    count++;
    console.log("inside ist: "+count);
    document.getElementById('bigImage').src=arr[count].src;
  }
  else if(count===arr.length-1){
    //reset
    count=0;
    document.getElementById('bigImage').src=arr[0].src;
    console.log("inside 2nd: "+count);

  }
  
  
 
  
 
 

}
