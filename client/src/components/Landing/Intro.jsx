import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { StyledIntro, StyledIntroContent } from './intro.styled';

export default function Intro() {
  const [name, setName] = useState(false);
  const [title, setTitle] = useState(false);

  useEffect(() => {
    const delayName = () => {
      setTimeout(() => {
        setName(true);
      }, 6000);
    };
    const delayTitle = () => {
      setTimeout(() => {
        setTitle(true);
      }, 8000);
    };
    delayName();
    delayTitle();
    clearTimeout(delayName);
    clearTimeout(delayTitle);
  }, []);

  return (
    <StyledIntro>
      <StyledIntroContent>
        <TypeAnimation
          sequence={[
            'console.log(\'Hello, World!\');',
            1000,
            'Hello, World! My name is',
          ]}
          className="greeting"
          wrapper="h4"
          speed={30}
          deletionSpeed={70}
        />
        {name && (
          <TypeAnimation
            sequence={[
              'Benjamin Pak.',
            ]}
            className="name"
            wrapper="h1"
            speed={50}
          />
        )}
        {title && (
          <TypeAnimation
            sequence={[
              'Full-Stack Software Engineer',
            ]}
            className="title"
            wrapper="h3"
            speed={50}
          />
        )}
      </StyledIntroContent>
    </StyledIntro>
  );
}
