import { sendEmailVerification } from 'firebase/auth';

import { firebaseAuth } from 'communication/firebase';
import Button from 'components/Utils/Button/Button';
import Modal from 'components/Utils/Modal/Modal';

interface ISuccessSignUpModalProps {
  closeHandler: () => void;
}

const NotVerifiedErrorModal = ({ closeHandler }: ISuccessSignUpModalProps) => {
  const { currentUser } = firebaseAuth;

  const resendEmailVerification = async () => {
    sendEmailVerification(currentUser);
    await firebaseAuth.signOut();
    closeHandler();
  };

  return (
    <Modal closeHandler={closeHandler}>
      <Modal.Header>Konto nie zostało aktywowane</Modal.Header>
      <Modal.Content>Aktywuj konto klikając w link wysłany przez nas na pododany przez Ciebie adres mailowy.</Modal.Content>
      <Modal.Footer>
        <Button fullWidth isSecondary onClick={closeHandler} text="Zamknij" type="button" />
        <Button fullWidth onClick={resendEmailVerification} text="Wyślij ponownie" type="button" />
      </Modal.Footer>
    </Modal>
  );
};

export default NotVerifiedErrorModal;
