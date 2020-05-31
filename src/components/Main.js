import React, { useEffect } from 'react';
import { getDogs, getNumberOfImages } from '../redux/actions';
import { connect } from 'react-redux';
import { getAllDogs, getDogImage } from '../services/api';
import Pie from './PieChart';
import '../styles/App.css';

const Main = ({ dogList, dispatchGetDogs, numberOfImages, dispatchGetNumberOfImages }) => {

  useEffect(()=>{
    getAllDogs()
      .then(resp => {
        const dogBreeds = Object.keys(resp.message);
        dogBreeds.forEach(breed=>{
          getDogImage(breed)
            .then(imageResponse => {
              dispatchGetNumberOfImages(imageResponse.message.length);
              const data = { breed, numberOfImages: imageResponse.message.length};
              dispatchGetDogs(data);
            })
            .catch(error => alert(error))
        });
      })
      .catch(error => alert(error))
  },[])

  return (
    <div>
      <h1>Below is a breakdown of the 10 breeds of dogs with the most uploaded images!</h1>
      <Pie data={dogList} numberOfImages={numberOfImages}/>
      <br/>
      <p>In total, {numberOfImages} images of {dogList.length} dog breeds were counted.</p>
    </div>
    )
};

const mapStateToProps = state => ({
  dogList: state.dogsReducer,
  numberOfImages: state.numberOfImagesReducer,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetDogs: data => dispatch(getDogs(data)),
  dispatchGetNumberOfImages: data => dispatch(getNumberOfImages(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);