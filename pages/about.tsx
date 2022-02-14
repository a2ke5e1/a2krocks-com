import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Typography, Grid, Box, Card, Stack, Container, Button, ButtonGroup } from '@mui/material'
import { Mail, LinkedIn } from '@mui/icons-material'

import SocialMediaUrls from '../components/socialMediaUrls'
import styles from '../styles/About.module.css'

const About: NextPage = () => {

    const smUrls = new SocialMediaUrls()

    return (
        <div>
            <Head>
                <title>About - Apurv Ajay Kumar</title>
            </Head>
            <main>
                <Container  >
                    <Grid justifyContent="center" container sx={{
                        mt: 2,
                        mb: 2
                    }} columnSpacing={2}  >
                        <Grid item >
                            <Image className={styles.img_photo} width="500" height="550" src="/images/logo.jpg" alt="My Logo" />
                        </Grid>
                        <Grid item xs >
                            <Container>
                                <Typography variant='h1' >
                                    Hello! I am Apurv!
                                </Typography>
                                <Box sx={{ mt: 1 }}>
                                    <Typography align="justify" component="p" color="inherit" variant="body1">
                                        {
                                            "I am a software engineer student at Haldia Institue of Technology. I am currently working on a project called 'Yearly Progress' which is an android application which have widgets for the progess of day, month and Year."
                                        }
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} align="justify" component="p" color="inherit" variant="subtitle1">
                                        {
                                            "I am a self taught programmer and I am currently learning Next.js and TypeScript. I am also learning kotlin and python."
                                        }
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Button href="/resume.pdf" download variant="outlined"> RESUME</Button>
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Typography variant="caption" >
                                        {`Let's get in touch`}
                                    </Typography>
                                </Box>
                                <ButtonGroup sx={{
                                    mt: 1,
                                    mb: 5
                                }} variant="outlined"  >
                                    <Button startIcon={<Mail />} href={smUrls.mail} >Email</Button>
                                    <Button startIcon={<LinkedIn />} href={smUrls.linkedin} >LinkedIn</Button>
                                </ButtonGroup>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default About