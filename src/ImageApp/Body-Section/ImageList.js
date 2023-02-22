import React from 'react';
import "./ImageList.css";
import { addImage } from '../REDUX/ImageSclice';
import { useDispatch } from 'react-redux';

function ImageList({images}) {
 const dispatch = useDispatch();
 const imageData = JSON.parse(localStorage.getItem('Image'));

  if(images === undefined){
    dispatch(addImage(imageData));
   }
  return (
    <div className='image_list_contain'>
       <div className='image_container'>
       {
            images.map((item) => 
              {
                return(
                  <div className='card-box' key={item.id}>
                    <img className='card-img' src={item.urls.regular} alt={item.alt_description}/>
                  </div>
                )
              }
              )
          } 
     </div>
     <div className='one_last'><button className='for_btn2'>Read more</button></div>
    </div>
  )
}

export default ImageList
