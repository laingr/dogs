const BASE_URL = 'https://dog.ceo/api';

const getAllDogs = async () => {
  const resp = await fetch(`${BASE_URL}/breeds/list/all`);
  if (resp.ok) return resp.json();
  throw new Error('Problem fetching list of dog breeds');
}

const getDogImage = async (breed) => {
  const resp = await fetch(`${BASE_URL}/breed/${breed}/images`);
  if (resp.ok) return resp.json();
  throw new Error('Problem fetching image for {breed}');
}

export {getAllDogs, getDogImage};