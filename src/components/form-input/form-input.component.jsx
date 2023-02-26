import {
  FormInputContainer,
  FormInputGroup,
  FormInputLabel,
} from './form-input.styles';

// const FormInput = ({ label, otherProps }) => {
const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputGroup>
      <FormInputContainer {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value?.length}>
          {label}
        </FormInputLabel>
      )}
    </FormInputGroup>
  );

  // return (
  //   <div className="group">
  //     <input className="form-input" {...otherProps} />
  //     {label && (
  //       <label
  //         className={`${
  //           otherProps.value?.length ? 'shrink' : ''
  //         } form-input-label`}
  //       >
  //         {label}
  //       </label>
  //     )}
  //   </div>
  // );
};

export default FormInput;
