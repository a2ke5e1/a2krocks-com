import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import ResponsiveAppBar from '../components/ResponsiveAppBar'

// Theme stuff
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Home: NextPage = () => {

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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </ThemeProvider>
    
  )
}

export default Home
