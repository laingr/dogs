import React, { useEffect } from 'react';
import { getDogs } from '../redux/actions';
import { connect } from 'react-redux';
import {getAllDogs} from '../services/api';

const Main = ({ dogList, dispatchGetDogs }) => {

  useEffect(()=>{
    getAllDogs()
      .then(resp => {
        const dogBreeds = Object.keys(resp.message);
        dogBreeds.forEach(breed=>{
          dispatchGetDogs(breed);
        });
      })
  },[])

  return (
    <div>Hello</div>
  )
};

const mapStateToProps = state => ({
  dogList: state.dogReducer
});

const mapDispatchToProps = dispatch => ({
  dispatchGetDogs: data => dispatch(getDogs(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);