const BASE_URL = 'https://dog.ceo/api';

const getAllDogs = async () => {
  const resp = await fetch(`${BASE_URL}/breeds/list/all`);
  if (resp.ok) return resp.json();
  throw new Error('Problem fetching dog breeds');
}

export {getAllDogs};