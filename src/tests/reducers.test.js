
import { dogsReducer, numberOfImagesReducer } from '../redux/reducers';

describe('dogsReducer', () => {
  it('should return the initial state', () => {
    expect(dogsReducer(undefined, {})).toEqual([])
  });
  
  it('should handle GET_DOGS', () => {
    const data =  {breedName: "wolfhound", amountOfImages: 218}
    const dogList = [
      {breedName: "wolfhound", amountOfImages: 218}
    ]
    expect(dogsReducer([], {type: 'GET_DOGS', data})).toEqual(dogList);
  });
});

describe('numberOfImagesReducer', () => {
  it('should return the initial state', () => {
    expect(numberOfImagesReducer(undefined, {})).toEqual(0)
  });

  it('should handle GET_NUMBER_OF_IMAGES', () => {
    const data = 139;
    const numberOfImages = 139;
    expect(numberOfImagesReducer(0, {type: 'GET_NUMBER_OF_IMAGES', data})).toEqual(numberOfImages);
  });
})