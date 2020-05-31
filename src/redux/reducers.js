const dogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DOGS':
      return [...state].concat(action.data)
      default:
        return state;
      };
    };

const numberOfImagesReducer = (state=0, action) => {
  switch(action.type) {
    case 'GET_NUMBER_OF_IMAGES':
      return state + action.data;
    default:
      return state;
  };
}

export { dogsReducer, numberOfImagesReducer };