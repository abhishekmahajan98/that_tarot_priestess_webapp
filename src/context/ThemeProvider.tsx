'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('tarot-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('tarot-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Prevent flash of incorrect theme
  if (!mounted) {
    return null;
  }

  const antDesignTheme = {
    algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: '#8B5CF6',
      colorBgContainer: theme === 'dark' ? '#1A1030' : '#FFFFFF',
      colorBgElevated: theme === 'dark' ? '#0F0A1F' : '#FFF8F0',
      colorText: theme === 'dark' ? '#F5E6D3' : '#1F1635',
      colorTextSecondary: theme === 'dark' ? '#C9B8D6' : '#4A3F5C',
      colorBorder: theme === 'dark' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(107, 33, 168, 0.15)',
      borderRadius: 12,
      fontFamily: "'Raleway', sans-serif",
      colorLink: '#8B5CF6',
      colorLinkHover: '#D4AF37',
    },
    components: {
      Button: {
        borderRadius: 32,
        controlHeight: 48,
        paddingContentHorizontal: 32,
      },
      Card: {
        borderRadiusLG: 20,
        paddingLG: 32,
      },
      Input: {
        borderRadius: 12,
        controlHeight: 48,
      },
      Select: {
        borderRadius: 12,
        controlHeight: 48,
      },
      Form: {
        labelFontSize: 16,
        verticalLabelPadding: '0 0 12px',
      },
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ConfigProvider theme={antDesignTheme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
