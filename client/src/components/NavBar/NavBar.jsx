import React from 'react';
import { Link } from 'react-scroll';
import { PropTypes } from 'prop-types';
import { StyledNavBar, StyledLogo } from './navbar.styled';

export default function NavBar({ theme, toggleTheme }) {
  return (
    <StyledNavBar>
      <StyledLogo style={{ gridColumn: 'span 2' }}>Logo</StyledLogo>
      <Link
        className="Landing-link"
        to="Landing"
        spy
        smooth
        offset={-250}
        duration={500}
      >
        Home
      </Link>
      <Link
        className="About-link"
        to="About"
        spy
        smooth
        offset={-80}
        duration={500}
      >
        About
      </Link>
      <Link
        className="Projects-link"
        to="Projects"
        spy
        smooth
        offset={-80}
        duration={500}
      >
        Projects
      </Link>
      <Link
        className="Contact-link"
        to="Contact"
        spy
        smooth
        offset={-80}
        duration={500}
      >
        Contact
      </Link>
      <button
        type="button"
        onClick={() => toggleTheme()}
      >
        {theme === 'dark' ? 'Light Mode 🌞' : 'Dark Mode 🌜'}
      </button>
    </StyledNavBar>
  );
}

NavBar.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
