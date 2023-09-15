import { blueGrey } from '@mui/material/colors';
import { alpha, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3e6ba3',
        },
        secondary: {
            main: '#88b357',
        },
        muted: {
            main: blueGrey[50],
        },
        yellow: {
            main: '#F7C35F',
        },
    },
    typography: {
        fontFamily: "'Titillium Web', sans-serif",
    },
    fontSize: {
        micro: '0.35rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    borderRadius: {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
    },
    fontWeight: {
        light: 200,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 900,
    },
});
// primary: {
//     background: 'linear-gradient(90deg, rgba(229,229,208,1) 0%, rgba(0,47,108,1) 100%);',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
// },
// ============== gradient

theme.gradient = {
    primary: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    secondary: `linear-gradient(25deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,

    // -----

    primaryOne: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.common.white} 180%)`,
    secondaryOne: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.common.white} 180%)`,

    // -----

    primaryAlpha: `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.7)} 0%, ${alpha(theme.palette.secondary.main, 0.7)} 100%)`,

    // -----

    whiteAlpha: `linear-gradient(45deg, ${alpha(theme.palette.secondary.main, 0.9)} 0%, ${alpha(theme.palette.common.white, 0.9)} 40%)`,
};

theme.palette.common.black = theme.palette.grey['900'];
theme.palette.common.grey = blueGrey[500];
theme.palette.common.greyLight = blueGrey[50];
theme.palette.greyDark = {
    main: blueGrey[500],
};

// =============== SHADOW
theme.shadows = {
    ...theme.shadows,
    default: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
    png: {
        WebkitFilter: 'drop-shadow(0px 6px 6px rgba(0,0,0,0.2))',
        filter: 'drop-shadow(0px 6px 6px rgba(0,0,0,0.2))',
    },
};

// =============== css override
theme.components = {
    ...theme.components,
    MuiCssBaseline: {
        styleOverrides: `          
  		`,
    },
};

export default theme;
