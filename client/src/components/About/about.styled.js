import styled, { keyframes } from 'styled-components';

export const StyledAboutHeader = styled.div`
  margin: auto;
  margin-top: 20px;
  padding-top: 30px;
  width: 110px;
  text-align: center;
  font-size: 30px;
  border-bottom: 4px solid black;
`;

export const StyledAboutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 8%;
`;

export const StyledAboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 50vh;
`;

export const StyledPic = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 20px;
  margin-right: 40px;
`;

export const StyledBio = styled.div`
  margin-right: 40px;
  overflow: scroll;
`;

export const StyledLeetCode = styled.div`
  grid-column: span 2;
  min-width: 500px;
  width: 100%;
  height: 300px;
  max-height: 300px;
  .code-block {
    height: 400px;
    width: 95%;
    border: 2px solid black;
    border-radius: 10px;
  }
`;

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const StyledCarousel = styled.div`
  display: inline-block;
  padding-top: 25px;
  animation: 65s ${slide} infinite linear;
  > img {
    height: 100px;
    width: 100px;
    margin: 0 35px;
  }
  `;

export const StyledCarouselContainer = styled.div`
  height: 17.5vh;
  background: lightgrey;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  bottom: 0;
  &:hover ${StyledCarousel} {
    animation-play-state: paused;
  }
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
    content: '';
    z-index: 2;
  }
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
    content: '';
    z-index: 2;
  }
`;
