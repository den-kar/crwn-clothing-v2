import { /*useContext, */useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

// import { UserContext } from '../../contexts/user.context';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignInForm = () => {
  const [formField, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  // const { setCurrentUser } = useContext(UserContext);

  // console.log(formField);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { value } = event.target;
    // console.log(formField);
    if (password !== confirmPassword) {
      alert("password and password confirmation don't match...");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      // setCurrentUser(user)
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        alert('user creation encountered an error', error);
      }
    }
    // const userDocRef = logEmailUser();
    // console.log(userDocRef);
  };

  // const logEmailUser = async () => {
  //   const { user } = await signInWithCustomEmailAndPassword(email, password);
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   return userDocRef;
  // };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          type="text"
          required
          // otherProps={{
          //   name: "displayName",
          //   onChange: handleChange,
          //   value: displayName,
          //   type: "text",
          //   required: true,
          // }}
        />

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

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          type="password"
          required
        />

        <Button buttonType='inverted' type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignInForm;
