import styled from 'styled-components';

export const ModalBackground = styled.div`
  align-items: center;
  backdrop-filter: blur(6px);
  background: ${({ theme }) => theme.colors.dark1}88;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white1};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: grid;
  gap: 2rem;
  grid-template-rows: 1fr min-content;
  max-width: 400px;
  padding: 3rem 4rem;
  width: 100%;
`;

export const ModalHeader = styled.header`
  color: ${({ theme }) => theme.colors.dark2};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 600;
  justify-content: center;
`;

export const ModalContent = styled.main`
  color: ${({ theme }) => theme.colors.dark2};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 400;
`;

export const ModalFooter = styled.footer`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
