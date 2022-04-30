import { SubmitHandler, useForm } from 'react-hook-form';

import Input from 'components/atoms/Input/Input';

export interface ISignInFormValues {
  email: string;
  password: string;
}

const SignInForm = () => {
  const onSubmit: SubmitHandler<ISignInFormValues> = data => {
    alert(JSON.stringify(data));
  };
  const { register, handleSubmit } = useForm<ISignInFormValues>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="email" register={register} required />
      <Input label="password" register={register} required />
    </form>
  );
};

export default SignInForm;
