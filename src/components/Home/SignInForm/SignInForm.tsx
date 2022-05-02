import { SubmitHandler, useForm } from 'react-hook-form';

import { Form } from 'components/Home/SignInForm/SignInForm.style';
import Button from 'components/Utils/Button/Button';
import Input, { EInputType } from 'components/Utils/Input/Input';

interface ISignInFormValues {
  [key: string]: string;
  email: string;
  password: string;
}

const SignInForm = () => {
  const { register, handleSubmit } = useForm<ISignInFormValues>();

  const onSubmit: SubmitHandler<ISignInFormValues> = data => {
    alert(JSON.stringify(data));
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
