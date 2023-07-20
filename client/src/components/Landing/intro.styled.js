import styled from 'styled-components';

export const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
`;

export const StyledIntroContent = styled.div`
  .greeting {
    font-size: 30px;
    font-family: 'Inconsolata';
  }
  .greeting::after {
    content: '|';
    opacity: 0;
  }
  .name {
    font-size: 80px;
    font-family: 'Inconsolata';
  }
  .name::after {
    content: '|';
    opacity: 0;
  }
  .title {
    font-size: 50px;
    font-family: 'Inconsolata';
  }
`;
