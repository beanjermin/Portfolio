import React from 'react';
import { StyledLanding } from './landing.styled';
import Intro from './Intro';

export default function Landing() {
  return (
    <StyledLanding id="Landing">
      <div>
        <Intro />
      </div>
    </StyledLanding>
  );
}
