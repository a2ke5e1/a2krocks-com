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

import { ProjectCard } from '../components/ProjectCard';
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
          <ProjectCard
            title="Project: 0"
            description="A mobile food ordering app designed for a local restaurant."
            image='/images/project0/cover.png'
            link="/projects/0"
          />
          <ProjectCard
            title="Project: 1"
            description="An educationl website for learning programming by finding and viewing coding tutorials."
            image='/images/project1/cover.png'
            link="/projects/1"
          />
          <ProjectCard
            title="Project: 2"
            description="A tool for communities to ensure that everyone has access to necessary medicine."
            image='/images/project2/cover.png'
            link="/projects/2"
          />
          <ProjectCard
            title="Project: 3"
            description="An android app which shows progress of the day, month and year."
            image='/images/project2/cover.png'
            link="/projects/3"
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>

  )
}

export default Home
