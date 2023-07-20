import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 80px;
  width: 100%;
  background: lightgrey;
  .Landing-link {
    grid-column: 8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .About-link {
    grid-column: 9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Projects-link {
  grid-column: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  .Contact-link {
    grid-column: 11;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    grid-column: 12;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    font-size: 16px;
    font-family: Times;
  }
  button:hover {
    cursor: pointer;
  }
  a {
    display: inline-block;
    position: relative;
    color: black;
    width: 75px;
  }
  a:hover {
    cursor: pointer;
  }
  a::after {
    content: '';
    position: absolute;
    bottom: 20px;
    width: 0;
    height: 2px;
    background: black;
    transition: width 0.4s;
  }
  a:hover::after {
    width: 100%;
  }
  /* .active {
    border-bottom: 3px solid black;
  } */
`;

export const StyledLogo = styled.div`
  grid-column: span 2;
`;
