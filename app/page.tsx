import type { NextPage } from 'next'

import styles from '../styles/index.module.css'

import { ProjectCard, ProjectType } from '../components/ProjectCard';
import { Container, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import FooterV2 from '../components/v2/FooterV2';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Apurv Ajay Kumar</title>
                <meta name="title" content="Apurv Ajay Kumar" />
                <meta name="description" content="I am a student currently pursuing a B.Tech in Information Technology. This is my portfolio website." />


                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.a2krocks.com/" />
                <meta property="og:title" content="Apurv Ajay Kumar" />
                <meta property="og:description" content="I am a student currently pursuing a B.Tech in Information Technology. This is my portfolio website." />
                <meta property="og:image" content="/images/logo.jpg" />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.a2krocks.com/" />
                <meta property="twitter:title" content="Apurv Ajay Kumar" />
                <meta property="twitter:description" content="I am a student currently pursuing a B.Tech in Information Technology. This is my portfolio website." />
                <meta property="twitter:image" content="/images/logo.jpg" />
            </Head>
            <main>
                <Container maxWidth="xl">
                    <Typography className={styles.headings}>
                        UI Projects
                    </Typography>
                    <Divider sx={{mb : 2 }} />
                    <Grid container className={styles["grid-container"]}
                        direction="row" spacing={2}
                        sx={{
                            mt: 0,
                            mb: 1
                        }}
                    >
                        <Grid item>
                            <ProjectCard
                                className={styles.animated_card}
                                title="Foody"
                                type={ProjectType.UX_UI}
                                description="A mobile food ordering app designed for a local restaurant."
                                image='/images/project0/cover.png'
                                link="/projects/foody"
                            />
                        </Grid>
                        <Grid item>
                            <ProjectCard
                                title="Logo"
                                type={ProjectType.UX_UI}
                                className={styles.animated_card}
                                description="An educational website for learning programming by finding and viewing coding tutorials."
                                image='/images/project1/cover.png'
                                link="/projects/logo"
                            />
                        </Grid>
                        <Grid item>
                            <ProjectCard
                                title="Medk"
                                type={ProjectType.UX_UI}
                                className={styles.animated_card}
                                description="A tool for communities to ensure that everyone has access to necessary medicine."
                                image='/images/project2/cover.png'
                                link="/projects/medk"
                            />
                        </Grid>

                    </Grid>
                    <Typography className={styles.headings}>
                        Android Projects
                    </Typography>
                    <Divider sx={{mb : 2 }} />
                    <Grid container alignSelf="center"
                        direction="row" spacing={2}
                        sx={{
                            mt: 0,
                        }}
                    >

                        <Grid item>
                            <ProjectCard
                                title="Yearly Progress"
                                type={ProjectType.ANDROID_APP}
                                className={styles.animated_card}
                                description="An android app which shows progress of the day, month and year."
                                image='/images/project3/cover.png'
                                link="https://www.a3group.co.in/yearly-progress"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>

    )
}

export default Home
