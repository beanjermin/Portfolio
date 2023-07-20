import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  StyledAboutHeader,
  StyledAboutContentContainer,
  StyledAboutContent,
  StyledPic,
  StyledBio,
  StyledLeetCode,
  StyledCarousel,
} from './about.styled';

export default function About() {
  const { ref: myRef, inView: visible } = useInView();
  console.log('visible', visible);

  /* Raw Intersection Observer Method

  const myRef = useRef();
  const [visible, setVisible] = useState();
  useEffect(() => {
    console.log('myRef', myRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  */

  return (
    <section id="About">
      <StyledAboutHeader ref={myRef}>
        About
      </StyledAboutHeader>
      <StyledAboutContentContainer>
        <StyledAboutContent>
          <StyledPic>
            <div>picture here</div>
          </StyledPic>
          <StyledBio>
            HELLO MY NAME IS BENJAMIN. JUST GRADUATED HACK REACTOR. PLEASE HIRE ME!
          </StyledBio>
          <StyledLeetCode>
            CODE CODE CODE
          </StyledLeetCode>
        </StyledAboutContent>
        <StyledCarousel> tech stack carousel here</StyledCarousel>
      </StyledAboutContentContainer>
    </section>
  );
}
