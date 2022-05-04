import { useState } from 'react';

const useModal = (initialValue = false) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(initialValue);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return { isModalOpen, openModal, closeModal, setIsModalOpen } as const;
};

export default useModal;
