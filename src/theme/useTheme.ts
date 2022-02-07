import { useEffect, useState } from 'react';
import themes from './schema.json';

export const useTheme = () => {
  const [theme, setTheme] = useState<any>(themes);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    setTheme(mode);
  };

  const getFonts = () => {
    
  }

  useEffect(() =>{
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};