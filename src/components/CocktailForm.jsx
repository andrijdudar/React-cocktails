import React, { useState } from 'react';
import '../components/CocktailForm.scss';

import Icon from '@mdi/react';
import { mdiGlassCocktail } from '@mdi/js';
import shakerIcon from '../img/ShakerIcon.svg';
import cn from 'classnames';


export function CocktailForm({ cocktailList, setCocktailList }) {

  // #region  state
  const [author, setAuthor] = useState('Автор');
  const [hesErrorAuthor, setHesErrorAuthor] = useState(false);

  const [nameCocktail, setNameCocktail] = useState('');
  const [hesErrorNameCocktail, setHesErrorNameCocktail] = useState(false);

  const [photo, setPhoto] = useState('');

  const [glas, setGlas] = useState('Посуд');
  const [hesErrorGlas, setHesErrorGlas] = useState(false);

  const [preparation, setPreparation] = useState('Приготування');
  const [hesErrorPreparation, setHesErrorPreparation] = useState(false);

  const [ice, setIce] = useState('Лід');
  const [hesErrorIce, setHesErrorIce] = useState(false);

  const [ingredients, setIngredients] = useState([{ ingredient: '', amount: '' }]);
  const [hesErrorIngredients, setHesErrorIngredients] = useState(false);

  const [description, setDescription] = useState('');
  const [hesErrorDescription, setHesErrorDescription] = useState(false);
  // #endregion


  //#region  handle

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
    setHesErrorAuthor(false);
  };

  const handleNameCocktailChange = (event) => {
    setNameCocktail(event.target.value);
    setHesErrorNameCocktail(false);
  };

  const handlePhoto = (event) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setPhoto(file);
      // Тут ви можете виконати додаткові дії з обраним файлом
    }
  };

  const handleGlasChange = (event) => {
    setGlas(event.target.value);
    setHesErrorGlas(false);
  };

  const handlePreparationChange = (event) => {
    setPreparation(event.target.value);
    setHesErrorPreparation(false);
  };

  const handleIceChange = (event) => {
    setIce(event.target.value);
    setHesErrorIce(false);
  };

  const handleIngredientsChange = (index, event) => {
    const { name, value } = event.target;
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][name] = value;
    setIngredients(updatedIngredients);
    setHesErrorIngredients(false);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    setHesErrorDescription(false);
  };

  //#endregion

  // #region func input
  const addInput = (event) => {
    event.preventDefault();

    setIngredients([...ingredients, { ingredient: '', amount: '' }]);
  };


  const removeInput = (index, event) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };
  //#endregion

  const makeCocktail = () => {
    console.log(photo);
    const cocktail = {
      "id": cocktailList.length + 1,
      "user": author,
      "nameCocktail": nameCocktail,
      "img": photo,
      "glass": glas,
      "cocktailPreparationMethod": preparation,
      "ice": ice,
      "ingredients": [...ingredients],
      "description": description
    }
    return cocktail;
  };

  const reset = () => {
    setAuthor('Автор');
    setNameCocktail('');
    setPhoto('');
    setGlas('Посуд');
    setPreparation('Приготування');
    setIce('Лід');
    setIngredients([{ ingredient: '', amount: '' }]);
    setDescription('');

    setHesErrorAuthor(false);
    setHesErrorNameCocktail(false);
    setHesErrorGlas(false);
    setHesErrorPreparation(false);
    setHesErrorIce(false);
    setHesErrorIngredients(false);
    setHesErrorDescription(false);
  };


  const hendleSubmit = (event) => {
    event.preventDefault();

    const checkError = (input, valuee) => {
      if (!input || input === valuee) {
        return true;
      }
      return false;
    };

    if (!author || !nameCocktail || !glas || !preparation || !ice || !description || ingredients.some(item => !item.ingredient || !item.amount)) {
      setHesErrorAuthor(checkError(author, 'Автор'));
      setHesErrorNameCocktail(checkError(nameCocktail));
      setHesErrorGlas(checkError(glas, 'Посуд'));
      setHesErrorPreparation(checkError(preparation, 'Приготування'));
      setHesErrorIce(checkError(ice, 'Лід'));

      setHesErrorIngredients(() => {
        const hasEmptyValue = ingredients.some(item => item.ingredient === '' || item.amount === '');
        return hasEmptyValue;
      });

      setHesErrorDescription(checkError(description));
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! return;
    }

    const cocktailData = makeCocktail();

    // Відправте POST-запит на сервер
    // fetch('https://ваш_сервер/api/cocktails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(cocktailData),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       setCocktailList([
    //         ...cocktailList,
    //         response,
    //       ])
    //       // Обробка успішної відповіді від сервера
    //       // Наприклад, перенаправлення користувача на іншу сторінку
    //     } else {
    //       // Обробка помилок
    //     }
    //   })
    //   .catch((error) => {
    //     // Обробка помилок мережі або інших помилок
    //   });

    setCocktailList([
      ...cocktailList,
      makeCocktail()
    ])

    reset()
  }


  return (
    <form
      onSubmit={hendleSubmit}
      onReset={reset}
      action="http://localhost:3000"
      method="POST"
      className='container section is-flex is-flex
    -direction-column'
    >
      {/* Автор */}
      <div className={cn("control has-icons-left",
        { 'is-danger': hesErrorAuthor })}>
        <div className="select is-medium is-rounded ">
          <select
            value={author}
            name='Author'
            onChange={handleAuthorChange}>
            <option disabled >Автор</option>
            <option>Плотніков Євген</option>
            <option>Дудар Андрій</option>
            <option>Пазяк Мар'ян</option>
          </select>
          {hesErrorAuthor && (
            <p className='eror'>&#8593;! Автора не вибрано !&#8593;</p>
          )}
        </div>
        <span className="icon is-medium is-left">
          <i className="fas fa-user"></i>
        </span>
      </div>


      {/* Назва коктейля, посуд, Приготування, Лід */}
      <div className="control field is-flex is-flex-direction-column ">
        <div>
          <label className="label has-text-white"><p className='title name-cocktail-title'>Назва Коктейля</p></label>
          <div className={cn("control",
            { 'is-danger': hesErrorNameCocktail })}>
            <input
              value={nameCocktail}
              name='NameCocktail'
              className="input name-cocktail is-rounded"
              type="text"
              placeholder="Negroni"
              onChange={handleNameCocktailChange}
            />

          </div>
          {hesErrorNameCocktail && (
            <p className='eror'>&#8593;! Як блядь коктейль називається !&#8593;</p>
          )}
        </div>

        <div className="file is-medium is-boxed ">
            <label className="file-label">
              <input
                className="file file-input"
                type="file"
                name="resume"
                onChange={handlePhoto}
                // hidden
            />
            {photo && (
              <div>
                {/* <p>Вибраний файл: {selectedFile.name}</p> */}
                <img className='photo' src={URL.createObjectURL(photo)} alt="Картинка" />
              </div>
            )}
            {!photo &&
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Фото
                </span>
              </span>}
            </label>
          </div>

        <div className={cn("control has-icons-left",
          { 'is-danger': hesErrorGlas })}>
          <div className="select  is-medium is-rounded">
            <select
              value={glas}
              name='Glas'
              onChange={handleGlasChange}
            >
              <option disabled>Посуд</option>
              <option>Олд Фешн</option>
              <option>Шале</option>
              <option>Хайбол</option>
              <option>Винний бокал</option>
            </select>
            {hesErrorGlas && (
              <p className='eror'>&#8593;! Мені його шо в чайнику подавати !&#8593;</p>
            )}
          </div>
          <span className="icon is-left">
            <Icon path={mdiGlassCocktail}
              title="mdiGlassCocktail"
              size={1}
              color="black"
            />
          </span>
        </div>

        <div className={cn("control has-icons-left",
          { 'is-danger': hesErrorPreparation })}>
          <div className="select  is-medium is-rounded">
            <select value={preparation} name='Preparation ' onChange={handlePreparationChange}>
              <option disabled >Приготування</option>
              <option>Шейк</option>
              <option>Стір</option>
              <option>Білд</option>
              <option>Фроулинг</option>
              <option>Бленд</option>
            </select>
            {hesErrorPreparation && (
              <p className='eror'>&#8593;! Яким курва методом його готувати !&#8593;</p>
            )}
          </div>
          <span className="icon is-large is-left">
            <img src={shakerIcon} alt='' style={{ width: '25px' }} />
          </span>
        </div>

        <div className={cn("control has-icons-left",
          { 'is-danger': hesErrorIce })}>
          <div className="select is-rounded is-medium">
            <select value={ice} name='Ice' onChange={handleIceChange}>
              <option disabled >Лід</option>
              <option>Кубик</option>
              <option>Глиба</option>
              <option>Без льоду</option>
            </select>
            {hesErrorIce && (
              <p className='eror'>&#8593;! Його шо кіп'ятком залити йомайо !&#8593;</p>
            )}
          </div>
          <span className="icon is-large is-left">
            <i className="fas">&#129482;</i>
          </span>
        </div>
      </div>

      {/* Списокк інгедієнтів та об'єм */}
      {ingredients.map((input, index) => (
        <div key={index} className="ingredient is-flex is-flex-direction-row is-justify-content-flex-start">
          <div className='is-flex is-flex-direction-row '>
            <div className="field">
              {index === 0 && (
                <label className="label has-text-white">Інгредієнт</label>
              )}
              <input
                className={cn("input input-in collapse is-rounded",
                  { 'is-danger': hesErrorIngredients && !input.ingredient })}
                type="text"
                name="ingredient"
                value={input.ingredient}
                onChange={(event) => handleIngredientsChange(index, event)}
                placeholder="Джин"
              />
              {hesErrorIngredients && !input.ingredient && (
                <p className='eror'>&#8593; !Шо наливати !&#8593;</p>
              )}
            </div>


            <div className="field">
              {index <= 0 && (
                <label className="label has-text-white">мл/гр</label>
              )}
              <input
                className={cn("input input-ml is-rounded",
                  { 'is-danger': hesErrorIngredients && !input.amount })}
                type="text"
                name="amount"
                value={input.amount}
                onChange={(event) => handleIngredientsChange(index, event)}
                placeholder="30"
              />
              {hesErrorIngredients && !input.amount && (
                <p className='eror'>&#8593; &#128545; &#8593;</p>
              )}
            </div>
          </div>
          {index > 0 ? (
            <button type="button" className='btn deleteInput btn_dell' onClick={() => removeInput(index)}>&times;</button>
          ) : (
            <button type="button" className='btn deleteInput disabled' onClick={() => removeInput(index)} disabled>&times;</button>
          )}
        </div>
      ))
      }

      {/* Кнопка додавання  інпуту */}
      <div className='btn-container'>
        <button className="btn btn_add" onClick={addInput}>
          +
        </button>
      </div>

      {/* Опис*/}
      <div>
        <p>Опис:</p>
        <textarea
          value={description}
          name='Description'
          className={cn("textarea is-large",
            { 'is-danger': hesErrorDescription })}
          placeholder="Опис коктейля"
          onChange={handleDescriptionChange}
        ></textarea>
        {hesErrorDescription && (
          <p className='eror'>&#8593;! Та шось бляха напиши про нього !&#8593;</p>
        )}
      </div>

      {/* Кнопки готово і скасувати */}
      <div className="btn-container">
        <div className="control">
          <button
            type='submit'
            className="btn_done btn_add"
            onClick={hendleSubmit}
          >
            Готово
          </button>
        </div>

        <div className="control">
          <button type='reset' className="btn_cencel btn_dell">
            Скасувати
          </button>
        </div>
      </div>
    </form >
  );
}

