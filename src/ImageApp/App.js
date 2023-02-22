import React,{useEffect} from 'react';
import "./App.css";
import ImageList from './Body-Section/ImageList';
import FilterComponent from './Header/FilterComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncImages } from './REDUX/ImageSclice';

function App() {
 const dispatch = useDispatch();
 const {images} = useSelector(state => state.imagestate);

useEffect(() => {
  const term = "nature";
  dispatch(fetchAsyncImages(term))
 },[dispatch])

  return (
    <div className='main_container'>
      <FilterComponent/>
      <div className='for_word'>Random</div>
      <ImageList images = {images.results} />
    </div>
  )
}

export default App
