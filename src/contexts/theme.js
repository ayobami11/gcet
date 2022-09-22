import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        black: '#000000',
        white: '#ffffff',
        lightBlue: '#03A9F4',
        mediumBlue: '#456387',
        darkBlue: '#0A274B',
        darkGray: '#0E0B2B'
    }
};

export const ThemeContextWrapper = ({ children }) => (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
);