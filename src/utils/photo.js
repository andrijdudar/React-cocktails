import { client } from '../services/httpClient';

export const getPhotoServer = () => {
  return client.get('/dishes');
};

export const addPhotoServer = (data) => {
  return client.post('/dishes/str', data);
};

export const deletePhotoServer = (id) => {
  return client.delete(`/cocktails/${id}`);
};
