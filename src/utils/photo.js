import { client } from '../services/httpClient';

export const getDataServer = () => {
  return client.get('/dishes/123');
};

export const addTextServer = (data) => {
  return client.postText('/dishes/upload/', data);
};

export const addFileServer = (data) => {
  return client.postFile('/dishes/upload/', data);
};

export const deletePhotoServer = (id) => {
  return client.delete(`/cocktails/${id}`);
};
