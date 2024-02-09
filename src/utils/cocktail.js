import { client } from '../services/httpClient';

//отримано всіх обєктів
export const getAllDishes = () => {
  return client.get('/api/dishes/');
};
//id конкретного обєкту
export const getDish = (id) => {
  return client.get(`/api/dishes/${id}`);
};
//отримати всі обєкти dishes які належать конкретній категорії
export const getAllDishCategory = (id) => {
  return client.get(`/api/categories/get_dishes/${id}`);
};
//отримати всі обєкти categories
export const getAllCategories = () => {
  return client.get('/api/categories/');
};
//отримати всі обєкти tags
export const getAllTags = () => {
  return client.get('/api/tags/');
};




//відправка нового обєкту
export const addDish = (data) => {
  return client.post('/api/dishes/create_new_dish', data);
};
//відправка нової категорії
export const addCategoty = (data) => {
  return client.post('/api/categories/add_category', data);
};




//  замінити існуюсий обєкт на новий з тим самим id
export const replaceDish = (data) => {
  return client.put('/api/dishes/update', data);
};
//змінити в існуюючому обєкті поле photo
export const updatePhoto = (data) => {
  return client.patch('/api/dishes/update_photo', data);
};
//змінити в існуюючому обєкті поля
export const updateDish = (data) => {
  return client.patch('/api/dishes/patch', data);
};




//видалити обєкт
export const deleteDish = (id) => {
  return client.delete(`/api/dishes/delete/${id}`);
};
//видалити категорію
export const deleteCategory = (id) => {
  return client.delete(`/api/categories/delete/${id}`);
};
//видалити тег
export const deleteTag = (id) => {
  return client.delete(`/api/tags/delete/${id}`);
};
