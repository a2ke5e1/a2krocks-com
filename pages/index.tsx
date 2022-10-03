import type {NextPage} from 'next'

import styles from '../styles/index.module.css'

import {ProjectCard, ProjectType} from '../components/ProjectCard';
import {Container, Grid, Typography} from '@mui/material'
import {Box} from '@mui/system';

const Home: NextPage = () => {
    return (
        <Box>
            <Container>
                <Typography fontWeight="lighter" fontSize={35}>
                    UI Projects
                </Typography>
                <Grid container alignSelf="center"
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
                <Typography fontWeight="lighter" fontSize={35} sx={{ mt: 3 }}>
                    Android Projects
                </Typography>
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
        </Box>

    )
}

export default Home
