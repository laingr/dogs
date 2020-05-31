import React, { useEffect } from 'react';
import {getAllDogs} from '../services/api';

const Main = () => {

  useEffect(()=>{
    getAllDogs()
      .then(resp => {
        const dogBreeds = Object.keys(resp.message);
        dogBreeds.forEach(breed=>{
          console.log(breed);
        });
      })
  },[])

  return (
    <div>Hello</div>
  )
}

export default Main;