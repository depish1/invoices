import { SubmitHandler, useForm } from 'react-hook-form';

import { Form } from 'components/Home/SignOutForm/SignOutForm.style';
import Button from 'components/Utils/Button/Button';
import Checkbox from 'components/Utils/Checkbox/Checkbox';
import Input, { EInputType } from 'components/Utils/Input/Input';

export interface ISignOutFormFormValues {
  [key: string]: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignOutForm = () => {
  const { register, handleSubmit } = useForm<ISignOutFormFormValues>();

  const onSubmit: SubmitHandler<ISignOutFormFormValues> = data => {
    alert(JSON.stringify(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input<ISignOutFormFormValues> label="email" register={register} required type={EInputType.EMAIL} />
      <Input label="password" register={register} required type={EInputType.PASSWORD} />
      <Checkbox label="regulaminAccept" register={register} required />
      <Button fullWidth text="Zarejestruj się" type="submit" />
    </Form>
  );
};

export default SignOutForm;
