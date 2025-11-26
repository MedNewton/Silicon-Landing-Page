import { createTheme, type Theme, type ThemeOptions } from "@mui/material/styles";
declare module "@mui/material/styles" {
    interface Palette {
      ctaGradient: string
      heroGradientBg: string
    }
  
    interface PaletteOptions {
      ctaGradient: string
      heroGradientBg: string
      titleGradient: string
    }
  }

const themeOptions: ThemeOptions = {
    palette: {
      mode: 'dark',
      ctaGradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(273.13deg, #6547A5 -6.55%, #3F6DDD 106.12%)',
      heroGradientBg: 'linear-gradient(90deg, rgba(211, 219, 239, 0.5) 0%, rgba(215, 211, 239, 0.5) 100%)',
      titleGradient: 'linear-gradient(273.13deg, #6547A5 -6.55%, #3F6DDD 106.12%)',
      primary: { main: 'rgba(30, 43, 66, 1)' },
      secondary: { main: 'rgba(61, 83, 123, 1)' },
      background: { default: '#131313', paper: '#151515' },
      text: { primary: '#ffffff', secondary: '#9F9F9F', disabled: '#F5F5F5' },
      error: { main: 'rgba(211, 47, 47, 1)' },
      warning: { main: 'rgba(239, 108, 0, 1)' },
      info: { main: 'rgba(2, 136, 209, 1)' },
      success: { main: 'rgba(76, 175, 80, 1)' },
      tonalOffset: 0.2,
      contrastThreshold: 3,
    },
    typography: {
      fontFamily: 'Sora',
    },
  };

const theme: Theme = createTheme(themeOptions);

export default theme;
