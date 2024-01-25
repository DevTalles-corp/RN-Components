import { PropsWithChildren, createContext, useState } from 'react';
import { ThemeColors, darkColors, lightColors } from '../../config/theme/theme';

type ThemeColor = 'light' | 'dark';


interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps );



export const ThemeProvider = ({ children }: PropsWithChildren ) => {

  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');


  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme( theme );
  }


  return (
    <ThemeContext.Provider
      value={{
          currentTheme: currentTheme,
          colors:  (currentTheme === 'light' ? lightColors : darkColors ),
          setTheme: setTheme,
      }}
    >
      { children }
    </ThemeContext.Provider>
  )
}




