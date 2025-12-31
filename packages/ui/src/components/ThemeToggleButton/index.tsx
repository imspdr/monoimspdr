import React, { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { useTheme } from '../../theme/ThemeProvider';
import { Container, SunIcon, MoonIcon } from './styled';

export const ThemeToggleButton: React.FC = () => {
  const { mode, toggleTheme } = useTheme();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  const isDark = mode === 'dark';

  return (
    <Container onClick={toggleTheme}>
      <SunIcon
        isVisible={!isDark}
        isRaising={!isDark}
        style={{ animation: isFirstRender ? 'none' : undefined }}
      >
        <HiSun />
      </SunIcon>
      <MoonIcon
        isVisible={isDark}
        isRaising={isDark}
        style={{ animation: isFirstRender ? 'none' : undefined }}
      >
        <HiMoon />
      </MoonIcon>
    </Container>
  );
};