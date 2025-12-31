export const lightPalette = {
  background: {
    bg1: '#ffffff',
    bg2: '#f8fafc',
    bg3: '#f1f5f9',
  },
  card: {
    card1: '#ffffff',
    card2: '#fefefe',
    card3: '#fafafa',
  },
  foreground: {
    fg1: '#0f172a',
    fg2: '#334155',
    fg3: '#64748b',
  },
  mint: {
    mint1: '#2dd4bf', // Teal 400
    mint2: '#5eead4', // Teal 300
    mint3: '#99f6e4', // Teal 200
  },
};

export const darkPalette = {
  background: {
    bg1: '#0f172a', // Slate 950
    bg2: '#1e293b', // Slate 900
    bg3: '#334155', // Slate 800
  },
  card: {
    card1: '#1e293b',
    card2: '#334155',
    card3: '#475569',
  },
  foreground: {
    fg1: '#f8fafc',
    fg2: '#e2e8f0',
    fg3: '#94a3b8',
  },
  mint: {
    mint1: '#2dd4bf', // Mint main
    mint2: '#14b8a6', // Mint darker
    mint3: '#0d9488', // Mint darkest
  },
};

export type ColorTokens = typeof lightPalette;
