import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';

import { EViewType } from 'enums/EViewType';
import { Form } from 'components/Home/SignInForm/SignInForm.style';
import Alert from 'components/Utils/Alert/Alert';
import Button from 'components/Utils/Button/Button';
import Input, { EInputType } from 'components/Utils/Input/Input';
import useNotVerifiedErrorModal from 'components/Home/hooks/useNotVerifiedErrorModal';

import { authErrorSelector, isLoadingSelector } from 'store/auth/selectors';
import { setError } from 'store/auth/actions';
import { signin } from 'store/auth/operations';

interface ISignInFormValues {
  [key: string]: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email('Podaj poprawny adres e-mail').required('Pole wymagane'),
    password: yup.string().required('Pole wymagane'),
  })
  .required();

const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isModalOpen, openModal, NotVerifiedErrorModal } = useNotVerifiedErrorModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormValues>({
    resolver: yupResolver(schema),
  });
  const formError = useSelector(authErrorSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    return () => {
      dispatch(setError(''));
    };
  }, [dispatch]);

  const onSubmit: SubmitHandler<ISignInFormValues> = async ({ email, password }) => {
    dispatch(
      signin({
        email,
        password,
        onNotVerified: openModal,
        onSuccess: () => navigate(`/${EViewType.INVOICES_LIST}`),
      }),
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input<ISignInFormValues>
        disabled={isLoading}
        error={errors.email?.message}
        label="email"
        register={register}
        required
        type={EInputType.EMAIL}
      />
      <Input<ISignInFormValues>
        disabled={isLoading}
        error={errors.password?.message}
        label="password"
        register={register}
        required
        type={EInputType.PASSWORD}
      />
      <Button disabled={isLoading} fullWidth text="Zaloguj się" type="submit" />
      {formError && <Alert text={formError} />}
      {isModalOpen && NotVerifiedErrorModal}
    </Form>
  );
};

export default SignInForm;
