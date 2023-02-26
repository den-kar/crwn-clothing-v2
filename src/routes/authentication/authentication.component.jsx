// import { useEffect } from 'react';

// import { getRedirectResult } from 'firebase/auth';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

// import {
//   // auth,
//   signInWithGooglePopup,
//   // signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.utils';

import { AuthenticationContainer } from './authentication.styles.SignUpContainer.jsx';

const SignIn = () => {
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response, 'blub SignIn');
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   })();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  // };

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );

  // return (
  //   <div className="authentication-container">
  //     {/* <h1>Sign In Page</h1> */}
  //     {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
  //     {/* <button onClick={signInWithGoogleRedirect}>
  //       Sign in with Google Redirect
  //     </button> */}
  //     {/* <button onClick={logGoogleRedirectUser}>
  //       Sign in with Google Redirect
  //     </button> */}
  //     <SignInForm />
  //     <SignUpForm />
  //   </div>
  // );
};

export default SignIn;
