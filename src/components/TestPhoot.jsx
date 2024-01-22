import { useState } from "react";
import cn from "classnames";
import './TestPhoto.css';
import { addPhotoServer, getPhotoServer } from "../utils/photo";
import { SERVER_URL } from "../services/httpClient";

export const TestPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoFromServer, setPhotoFromServer] = useState(null);
  const [loadingGet, setLoadingGet] = useState(false);

  const [errorGet, setErrorGet] = useState(false);
  const [errorPost, setErrorPost] = useState(false);
  const [postOk, setPostOk] = useState(false);


  const getData = async () => {
    // try {
    //   const photo = await getPhotoServer();
    //   setPhotoFromServer(photo);
    //   console.log(photo);
    // } catch (error) {
    //   if (error.name !== 'AbortError') {
    //     setErrorGet(true);
    //     console.error('Помилка отримання фотографії з сервера:');
    //   }
    // }
    getPhotoServer()
      .then((photo) => {
        setLoadingGet(true);
        setTimeout(() => {
          setLoadingGet(false);
          setPhotoFromServer(photo);
          console.log(photo);
        }, 2000);
      })
      .catch(() => {
        console.error('Помилка отримання фотографії з сервера:');
        setLoadingGet(true);
        setTimeout(() => {
          setLoadingGet(false);
          setErrorGet(true);
          setTimeout(() => {
            setErrorGet(false);
          }, 3000);
        }, 2000);
      });
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    // if (selectedFile) {
    //   try {
    //     const formData = new FormData();
    //     formData.append('image', selectedFile);

    //     await addPhotoServer(formData);
    //     reset();
    //   } catch (error) {
    //     setErrorPost(true);
    //     console.error('Помилка завантаження фотографії на сервер:');
    //   }
    // }

    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      addPhotoServer(formData)
        .then(() => {
          setPostOk(true);
          setTimeout(() => {
            setPostOk(false);
          }, 3000);
          reset();
        })
        .catch(() => {
          console.error('Помилка завантаження фотографії на сервер:');
          setErrorPost(true);
          setTimeout(() => {
            setErrorPost(false);
            reset();
          }, 3000);
        });
    }
  };

  const reset = () => {
    setSelectedFile(null);
  };

  return (
    <div className="container-photo">
      {errorGet &&
        <div class="alert alert-danger" role="alert">
          <p>Помилка отримання фотографії з сервера</p>
        </div>
      }
      {postOk &&
        <div class="alert alert-success" role="alert">
          <p>Фотографія успішно завантажена на сервер</p>
        </div>
      }
      {errorPost &&
        <div class="alert alert-danger" role="alert">
          <p>Помилка завантаження фотографії на сервер</p>
        </div>
      }
      <div className="test-photo">
        <form
          onSubmit={hendleSubmit}
          onReset={reset}
          action={SERVER_URL + '/dishes/add_photo'}
          method="POST"
          enctype="multipart/form-data"
        >
          <div className="file is-medium is-boxed ">
            <label className="file-label">
              <input
                className="file file-input"
                type="file"
                name="resume"
                onChange={handleFileChange}
              />
              {selectedFile && (
                <div>
                  {/* <p>Вибраний файл: {selectedFile.name}</p> */}
                  <img className='photo' src={URL.createObjectURL(selectedFile)} alt="Картинка" />
                </div>
              )}
              {!selectedFile && (
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">
                    Фото
                  </span>
                </span>
              )}
            </label>
          </div>


          <div className="btn-container">
            <div className="control">
              <button
                type='submit'
                // className={"btn_done btn_add"
                className={
                  cn('btn_done', 'btn_add', { 'btn-disableds': !selectedFile })
                }
                onClick={hendleSubmit}
              >
                Відправити
              </button>
            </div>

            <div className="control">
              <button
                type='reset'
                className={
                  cn('btn_cencel', 'btn_dell', { 'btn-disableds': !selectedFile })
                }
              >
                Скасувати
              </button>
            </div>
          </div>
        </form>
        <div className="test-photo__result">
          <h1>Результат</h1>
          <div className="control">
            <button
              type='submit'
              className="btn_add btn_done"
              onClick={getData}
            >
              Отримати фото з сервера
            </button>
          </div>
          {loadingGet && (
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )}
          {photoFromServer && (
            <img className='photo' src={URL.createObjectURL(photoFromServer)} alt="Картинка" />
          )}
        </div>
      </div>
    </div>
  );
};

