import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  line-height: 3rem;
  max-width: 500px;
  padding: 3rem;
  position: relative;
  width: 100%;

  &::before {
    background: transparent;
    border-left: 4px solid ${({ theme }) => theme.colors.primary1};
    border-radius: ${({ theme }) => theme.borderRadius};
    border-top: 4px solid ${({ theme }) => theme.colors.primary1};
    content: '';
    display: block;
    height: 8rem;
    left: 0rem;
    position: absolute;
    top: 0rem;
    width: 6rem;
  }

  &::after {
    background: transparent;
    border-bottom: 4px solid ${({ theme }) => theme.colors.primary1};
    border-radius: ${({ theme }) => theme.borderRadius};
    border-right: 4px solid ${({ theme }) => theme.colors.primary1};
    bottom: 0rem;
    content: '';
    display: block;
    height: 8rem;
    position: absolute;
    right: 0rem;
    width: 6rem;
  }
`;

export const CTA = styled.h1`
  color: ${({ theme }) => theme.colors.primary2};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 600;
`;
export const Description = styled.h1`
  color: ${({ theme }) => theme.colors.white3};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: 400;
`;
