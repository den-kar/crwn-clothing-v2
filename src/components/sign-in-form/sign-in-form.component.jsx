import { useState /*, useContext*/ } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

// import { UserContext } from '../../contexts/user.context';

import {
  signInAuthhUserWithEmailAndPassword,
  // createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import {
  SignInButtonContainer,
  SignInContainer,
} from './sign-in-form.styles';

const defaultSignInFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formField, setFormFields] = useState(defaultSignInFields);
  const { email, password } = formField;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultSignInFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formField, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // const { user } = await signInWithGooglePopup();
    // await createUserDocumentFromAuth(user);
    // setCurrentUser(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { value } = event.target;
    // console.log(formField);
    try {
      /*const { user } = */ await signInAuthhUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      // console.log(response);
      // await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
      // console.log(error);
      // if (error.code === 'auth/email-already-in-use') {
      //   alert('Cannot create user, email already in use');
      // } else {
      alert('user login encountered an error', error);
      // }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          onChange={handleChange}
          value={email}
          type="email"
          required
        />

        <FormInput
          label="Password"
          name="password"
          onChange={handleChange}
          value={password}
          type="password"
          required
        />

        <SignInButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </SignInButtonContainer>
      </form>
    </SignInContainer>
  );

  // return (
  //   <div className="sign-up-container">
  //     <h2>Already have an account?</h2>
  //     <span>Sign in with your email and password</span>
  //     <form onSubmit={handleSubmit}>
  //       <FormInput
  //         label="Email"
  //         name="email"
  //         onChange={handleChange}
  //         value={email}
  //         type="email"
  //         required
  //       />

  //       <FormInput
  //         label="Password"
  //         name="password"
  //         onChange={handleChange}
  //         value={password}
  //         type="password"
  //         required
  //       />

  //       <div className="buttons-container">
  //         <Button type="submit">Sign In</Button>
  //         <Button type="button" buttonType="google" onClick={signInWithGoogle}>
  //           Sign In With Google
  //         </Button>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default SignInForm;
