import * as actions from '../redux/actions';

describe('actions', () => {
  it('should have an action to get all dog breeds', () => {
    const data = {
      breedName: "whippet", 
      amountOfImages: 187
    };
    const expectedAction = {
      type: 'GET_DOGS',
      data
    };
    expect(actions.getDogs(data)).toEqual(expectedAction);
  });

  it('should create an action to get the amount of images', () => {
    const data = 2;
    const expectedAction = {
      type: 'GET_NUMBER_OF_IMAGES',
      data
    };
    expect(actions.getNumberOfImages(data)).toEqual(expectedAction);
  });
});