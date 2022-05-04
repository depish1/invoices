import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Form } from 'components/Home/SignUpForm/SignUpForm.style';
import Alert from 'components/Utils/Alert/Alert';
import Button from 'components/Utils/Button/Button';
import Checkbox from 'components/Utils/Checkbox/Checkbox';
import Input, { EInputType } from 'components/Utils/Input/Input';
import useSuccessSignUpModal from 'components/Home/hooks/useSuccessSignUpModal';

import { authErrorSelector, isLoadingSelector } from 'store/auth/selectors';
import { setError } from 'store/auth/actions';
import { signup } from 'store/auth/operations';

interface ISignUpFormFormValues {
  [key: string]: string | boolean;
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const schema = yup
  .object({
    firstName: yup.string().required('Pole wymagane'),
    email: yup.string().required('Pole wymagane').email('Podaj poprawny adres e-mail'),
    password: yup.string().required('Pole wymagane').min(6, 'Hasło musi mieć conajmniej 6 znaków'),
    confirmPassword: yup
      .string()
      .required('Pole wymagane')
      .oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
    terms: yup.bool().oneOf([true], 'Pole wymagane'),
  })
  .required();

const SignUpForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormFormValues>({
    resolver: yupResolver(schema),
  });
  const { isModalOpen, openModal, SuccessSignUpModal } = useSuccessSignUpModal();
  const error = useSelector(authErrorSelector);
  const isLoading = useSelector(isLoadingSelector);

  const onSubmit: SubmitHandler<ISignUpFormFormValues> = ({ email, password, firstName }) => {
    dispatch(signup({ email, firstName, password, onSuccess: openModal }));
  };

  useEffect(() => {
    return () => {
      dispatch(setError(''));
    };
  }, [dispatch]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input<ISignUpFormFormValues>
          disabled={isLoading}
          error={errors.firstName?.message}
          label="firstName"
          register={register}
          required
          type={EInputType.TEXT}
        />
        <Input<ISignUpFormFormValues>
          disabled={isLoading}
          error={errors.email?.message}
          label="email"
          register={register}
          required
          type={EInputType.EMAIL}
        />
        <Input<ISignUpFormFormValues>
          disabled={isLoading}
          error={errors.password?.message}
          label="password"
          register={register}
          required
          type={EInputType.PASSWORD}
        />
        <Input<ISignUpFormFormValues>
          disabled={isLoading}
          error={errors.confirmPassword?.message}
          label="confirmPassword"
          register={register}
          required
          type={EInputType.PASSWORD}
        />
        <Checkbox disabled={isLoading} error={errors.terms?.message} label="terms" register={register} required />
        <Button disabled={isLoading} fullWidth text="Zarejestruj się" type="submit" />
        {error && <Alert text={error} />}
      </Form>
      {isModalOpen && SuccessSignUpModal}
    </>
  );
};

export default SignUpForm;
