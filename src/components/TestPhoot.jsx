import { useEffect, useState } from "react";
import cn from "classnames";
import './TestPhoto.css';
import { addTextServer, addFileServer, getDataServer } from "../utils/photo";
import getCocktailsFromServer from "../services/FirstGetServer";

export const TestPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dataToSend = { "message": "hello" };

  // #region states
  // const [textServer, setTextServer] = useState(null);
  // const [fileServer, setFileServer] = useState(null);
  // const [loadingGet, setLoadingGet] = useState(false);
  // const [postOk, setPostOk] = useState(false);
  // const [errorGet, setErrorGet] = useState(false);
  // const [errorPost, setErrorPost] = useState(false);
  // #endregion
  useEffect(() => {
    getCocktailsFromServer()
      .then((cocktailsFromServer) => {
        selectedFile(cocktailsFromServer);
        console.log(selectedFile); // Виведе оновлений список коктейлів
        console.log(cocktailsFromServer);
      })
      .catch(() => { })
  }, []);



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const reset = () => {
    setSelectedFile(null)
  }

  const hendleSubmitText = async (data) => {
    try {
      const response = await fetch('https://4d2c-46-119-118-70.ngrok-free.app/api/dishes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Data successfully sent to the server');
      } else {
        console.error('Failed to send data to the server');
      }
    } catch (error) {
      console.error('Error while sending data:', error);
    }
  };

  const hendleSubmitFile = async (selectedFile) => {
    try {
      const formData = new FormData();
      formData.append('photo', selectedFile);

      const response = await fetch('https://5767-46-119-118-70.ngrok-free.app/api/dishes/uploadphoto/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image to the server');
      }

      console.log('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image to the server:', error.message);
    }
  };

  const getData = () => {
    // getDataServer()
    //   .then((data) => {
    //     setLoadingGet(true);
    //     setTimeout(() => {
    //       setLoadingGet(false);
    //       setphotoDataServer(data);
    //       console.log(data);
    //     }, 2000);
    //   })
    //   .catch(() => {
    //     console.error('Помилка отримання фотографії з сервера:');
    //     setLoadingGet(true);
    //     setTimeout(() => {
    //       setLoadingGet(false);
    //       setErrorGet(true);
    //       setTimeout(() => {
    //         setErrorGet(false);
    //       }, 3000);
    //     }, 2000);
    //   });
  }

  // const hendleSubmit = (event) => { //!сама перша функція з сетами і таймаутами
  //   event.preventDefault();

  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append('image', selectedFile.json());

  //     addPhotoServer(formData)
  //       .then(() => {
  //         setPostOk(true);
  //         setTimeout(() => {
  //           setPostOk(false);
  //         }, 3000);
  //         reset();
  //       })
  //       .catch(() => {
  //         console.error('Помилка завантаження фотографії на сервер:');
  //         setErrorPost(true);
  //         setTimeout(() => {
  //           setErrorPost(false);
  //           reset();
  //         }, 3000);
  //       });
  //   }
  // };

  return (
    <div className="container-photo">

      {/* {errorGet &&
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
      } */}
      <div className="test-photo">
        <form
          // onSubmit={hendleSubmit}
          onReset={reset}
          // action={SERVER_URL + '/dishes/add_photo'}
          // method="POST"
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
                className={
                  cn('btn_done', 'btn_add', { 'btn-disableds': !selectedFile })
                }
                onClick={() => {
                  hendleSubmitFile(selectedFile)
                  addFileServer(selectedFile)
                }}// file
              >
                Відправити файл
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
        <button
          type='submit'
          className='btn_done btn_add'
          onClick={() => {
            addTextServer(dataToSend)
            hendleSubmitText(dataToSend)
          }} //raw text
        >
          Відправити текст
        </button>
        <div className="test-photo__result">
          <h1>Результат</h1>
          <div className="control">
            <button
              type='submit'
              className="btn_add btn_done"
              onClick={() => {
                // getData()
                // getDataServer()
                getCocktailsFromServer()
              }}
            >
              Отримати фото з сервера
            </button>
          </div>
          {/*
          {loadingGet && (
          <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )}
          {photoDataServer && (
            <img className='photo' src={URL.createObjectURL(photoDataServer)} alt="Картинка" />
          )} */}

        </div>
      </div>
    </div>
  );
};

