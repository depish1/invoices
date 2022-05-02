import styled from 'styled-components';

import bgImg from 'assets/images/background.png';

export const Background = styled.div`
  background-image: url(${bgImg});
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;

  &:after {
    background: ${({ theme }) => theme.colors.dark1}E1;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
