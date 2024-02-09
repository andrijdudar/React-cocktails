import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Тут ви можете обробити відповідь від Google та виконати потрібні дії, наприклад, авторизацію користувача
  };

  return (
      <GoogleLogin
        className='login-container'
      clientId="my-project-dynamoblues.apps.googleusercontent.com" // Вставте ваш Google Client ID
        buttonText="Увійти через Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
  );
};

export default GoogleLoginButton;
