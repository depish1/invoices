import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { EViewType } from 'enums/EViewType';
import { Form } from 'components/Home/SignInForm/SignInForm.style';
import Button from 'components/Utils/Button/Button';
import Input, { EInputType } from 'components/Utils/Input/Input';

import { signin } from 'store/auth/operations';

interface ISignInFormValues {
  [key: string]: string;
  email: string;
  password: string;
}

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<ISignInFormValues>();

  const onSubmit: SubmitHandler<ISignInFormValues> = async data => {
    try {
      const xd = dispatch(signin(data));
      console.log('xd', xd);
      navigate(`/${EViewType.INVOICES_LIST}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input<ISignInFormValues> label="email" register={register} required type={EInputType.EMAIL} />
      <Input<ISignInFormValues> label="password" register={register} required type={EInputType.PASSWORD} />
      <Button fullWidth text="Zaloguj się" type="submit" />
    </Form>
  );
};

export default SignInForm;
