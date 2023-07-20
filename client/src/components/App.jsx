import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../globalstyles';
import Landing from './Landing/Landing';
import NavBar from './NavBar/NavBar';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default function App() {
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <header>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
      </header>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}
