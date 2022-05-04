import Button from 'components/Utils/Button/Button';
import Modal from 'components/Utils/Modal/Modal';

interface ISuccessSignUpModalProps {
  closeHandler: () => void;
}

const SuccessSignUpModal = ({ closeHandler }: ISuccessSignUpModalProps) => {
  return (
    <Modal closeHandler={closeHandler}>
      <Modal.Header>Rejestracja zakończona pomyślnie.</Modal.Header>
      <Modal.Content>Aktywuj konto klikając w link wysłany przez nas na pododany przez Ciebie adres mailowy.</Modal.Content>
      <Modal.Footer>
        <Button fullWidth onClick={closeHandler} text="Zamknij" type="button" />
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessSignUpModal;
