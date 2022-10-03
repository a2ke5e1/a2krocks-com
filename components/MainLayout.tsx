import React, { Component } from 'react'
import Head from 'next/head'
import Footer from '../components/footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'

// Theme stuff
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FooterV2 from "./v2/FooterV2";


export default function MainLayout({ children } : any) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>
                <Head>
                    <title>Apurv Ajay Kumar</title>
                    <meta name="description" content="a2krocks' portfolio made using next.js" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <ResponsiveAppBar />
                    {children}
                </main>
                <footer>
                    <FooterV2 />
                </footer>
            </div>
        </ThemeProvider>
    );
}

