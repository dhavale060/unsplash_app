import React, {useState } from 'react';
import './FilterComponent.css';
import { useDispatch } from 'react-redux';
import { fetchAsyncImages} from '../REDUX/ImageSclice';

function FilterComponent() {
  const dispatch = useDispatch();
  const [term , setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if(term === ""){
      alert("please add search value")
    }else{
     dispatch(fetchAsyncImages(term));
    }
    setTerm("");
  }

  return (
    <div className='form_div'>
       <form className='d-flex' onSubmit={submitHandler}>
         <input type ="text" className="search_bar" placeholder='Search for photos' onChange={(e) => setTerm(e.target.value)}/>
         <button className='for_btn'><i className="bi bi-search"></i></button>
       </form>
    </div>
  )
}

export default FilterComponent
