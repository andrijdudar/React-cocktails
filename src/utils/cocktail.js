import { client } from '../services/httpClient';

export const getCocktailsServer = () => {
  return client.get();
};

export const addCocktailServer = (data) => {
  return client.post('/dishes/add_photo', data);
};

export const deleteCocktailServer = (id) => {
  return client.delete(`/cocktails/${id}`);
};
