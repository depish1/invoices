import { firebaseAuth } from 'communication/firebase';
import Modal from 'components/Home/NotVerifiedErrorModal/NotVerifiedErrorModal';
import useModal from 'hooks/useModal';

const useNotVerifiedErrorModal = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const closeHandler = async () => {
    await firebaseAuth.signOut();
    closeModal();
  };

  const NotVerifiedErrorModal = <Modal closeHandler={closeHandler} />;

  return { isModalOpen, openModal, NotVerifiedErrorModal };
};

export default useNotVerifiedErrorModal;
