import { client } from '../services/httpClient';

export const getDataServer = () => {
  return client.get('/api/dishes/123');
};

export const addTextServer = (data) => {
  return client.postText('/api/dishes/add_photo/', data);
};

export const addFileServer = (data, ) => {
  return client.postFile('/api/dishes/add_photo/', data);
};

export const deletePhotoServer = (id) => {
  return client.delete(`/cocktails/${id}`);
};


// const file = {
//  {
//   category_id
//   :
//   7
// }
// category_name
// :
// null
// created_at
// :
// "2023-11-01T11:58:41.656198"
// description
// :
// "Алкогольний коктейль кубинського походження, основними компонентами якого є світлий ром , сік лайма і цукор . Класифікується як аперитив. Прийнято вважати, що коктейль вигадав американський інженер, який перебував на Кубі під час війни з іспанцями і дав йому назву на честь пляжу Дайкірі поблизу Сантьяго . Але той, який дійсно набув міжнародної популярності, був створений Костянтином Рубалькаба Вертом ( Constantino Rubalcaba Vert ) в одному з найвідоміших барів у світі, « El Floridita La Habana ». Цей бар, колиска дайкірі, був відкритий в 1817 році і став відомий завдяки письменнику Ернесту Хемінгуею , який бував тут регулярно."
// dish_name
// :
// "Daiquiri"
// first_name
// :
// null
// id
// :
// 123
// image_public_id
// :
// "qbyguz0rud2cc0zpxkqe"
// image_url
// :
// "http://res.cloudinary.com/dgv8m5jzd/image/upload/v1701784388/qbyguz0rud2cc0zpxkqe.jpg"
// ingredients
// :
// "Ром Гавана клуб Anejo 3 60, фреш лайму 30, Цукровий сироп 18"
// stop_list
// :
// false
// updated_at
// :
// "2024-01-20T12:20:10.289813"
// user_id
// :
// null
// }
