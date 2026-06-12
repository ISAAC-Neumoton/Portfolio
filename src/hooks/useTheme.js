import { useEffect, useState } from 'react';

export function useTheme() {
  // Checks localStorage or defaults to your rule: light mode ("") as default
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || '';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}