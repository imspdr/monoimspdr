import React, { createContext, useContext, useEffect, useState } from 'react';
import { Global, css } from '@emotion/react';
import { lightPalette, darkPalette, ColorTokens } from '../tokens/colors';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  tokens: ColorTokens;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const tokens = mode === 'light' ? lightPalette : darkPalette;

  // Map tokens to CSS variables for cross-boundary styling
  const generateVars = (obj: any, prefix = '') => {
    let vars = '';
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object') {
        vars += generateVars(value, `${prefix}${key}-`);
      } else {
        vars += `--imspdr-${prefix}${key}: ${value};`;
      }
    }
    return vars;
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, tokens }}>
      <Global
        styles={css`
          :root {
            ${generateVars(tokens)}
          }
          body {
            background-color: var(--imspdr-background-bg1);
            color: var(--imspdr-foreground-fg1);
            transition: background-color 0.2s, color 0.2s;
          }
        `}
      />
      {children}
    </ThemeContext.Provider>
  );
};
