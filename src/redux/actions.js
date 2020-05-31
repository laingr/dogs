export const getDogs = data  => {
  return {
    type: 'GET_DOGS',
    data
  };
};

export const getNumberOfImages = data => {
  return {
    type: 'GET_NUMBER_OF_IMAGES',
    data
  };
};