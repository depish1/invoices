import { EFormType } from 'components/Home/Forms/Forms';
import { useTabsContext } from 'components/Home/hooks/useTabsContext';
import Modal from 'components/Home/SuccessSignUpModal/SuccessSignUpModal';
import useModal from 'hooks/useModal';

const useSuccessSignUpModal = () => {
  const { changeTab } = useTabsContext();
  const { isModalOpen, openModal, closeModal } = useModal();

  const closeHandler = () => {
    closeModal();
    changeTab(EFormType.SIGN_IN);
  };

  const SuccessSignUpModal = <Modal closeHandler={closeHandler} />;

  return { isModalOpen, openModal, SuccessSignUpModal };
};

export default useSuccessSignUpModal;
