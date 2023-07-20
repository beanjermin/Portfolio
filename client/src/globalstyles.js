import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const lightTheme = {
  // body: '#cdc7e5',
  body: 'white',
  text: 'black',
  sectionText: 'black',
};

export const darkTheme = {
  // body: '#7776bc',
  body: 'black',
  text: 'white',
  sectionText: 'black',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s ease-in, color 0.2s ease-in;
    margin: 0;
  }
  header {
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
  }
  section {
    height: 91vh;
  }
  section:nth-child(even) {
    background: #f1f1f1;
    color: ${({ theme }) => theme.sectionText};
  }
`;
