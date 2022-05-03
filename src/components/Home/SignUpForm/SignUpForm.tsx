import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Form } from 'components/Home/SignUpForm/SignUpForm.style';
import Button from 'components/Utils/Button/Button';
import Checkbox from 'components/Utils/Checkbox/Checkbox';
import Input, { EInputType } from 'components/Utils/Input/Input';

import { signup } from 'store/auth/operations';

interface ISignUpFormFormValues {
  [key: string]: string;
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<ISignUpFormFormValues>();

  const onSubmit: SubmitHandler<ISignUpFormFormValues> = ({ email, password, firstName }) => {
    dispatch(signup({ email, firstName, password }));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input<ISignUpFormFormValues> label="name" register={register} required type={EInputType.TEXT} />
      <Input<ISignUpFormFormValues> label="email" register={register} required type={EInputType.EMAIL} />
      <Input<ISignUpFormFormValues> label="password" register={register} required type={EInputType.PASSWORD} />
      <Input<ISignUpFormFormValues> label="confirmPassword" register={register} required type={EInputType.PASSWORD} />
      <Checkbox label="regulaminAccept" register={register} required />
      <Button fullWidth text="Zarejestruj się" type="submit" />
    </Form>
  );
};

export default SignUpForm;
