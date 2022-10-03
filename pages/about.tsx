import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Typography, Grid, Box, Card, Stack, Container, Button, ButtonGroup} from '@mui/material'
import {Mail, LinkedIn} from '@mui/icons-material'

import SocialMediaUrls from '../Info/SocialMediaUrls'
import styles from '../styles/About.module.css'

const About: NextPage = () => {

    const smUrls = new SocialMediaUrls()
    const age: number = new Date().getFullYear() - 2002;

    return (
        <div>
            <Head>
                <title>About - Apurv Ajay Kumar</title>
            </Head>
            <main>
                <Box minHeight="81vh">
                    <Container className={styles.arcylic}>
                        <Grid justifyContent="center" container sx={{
                            mt: 2,
                            mb: 2
                        }} columnSpacing={0}>
                            <Grid item>
                                <img className={styles.arcylic} src="/images/logo.jpg" alt="My Logo"/>
                            </Grid>
                            <Grid item xs>
                                <Container>
                                    <Typography sx={{
                                        pt: 5
                                    }} className={styles.greeting_name}>
                                        {"Yo! It's your mate! Apurv"}
                                    </Typography>
                                    <Box sx={{mt: 1}}>
                                        <Typography align="justify" component="p" color="text.secondary"
                                                    fontStyle="italic" fontSize={16}
                                                    variant="body1">
                                            {
                                                "I am a "
                                            } {age} {"yo Student trying to find my self worth in the grand universe."}
                                        </Typography>
                                        <Typography sx={{mt: 2}} align="justify" component="p" color="text.secondary"
                                                    variant="subtitle1">
                                            {
                                                "I am a self taught programmer who has hands dirty in following programing languages such as C, C++, C#, Java , Javascript, Typescript, Kotlin, Flutter and Python." +
                                                " I have experience in working with web development, android apps and automations."
                                            }
                                        </Typography>
                                    </Box>
                                    <Box sx={{mt: 2}}>
                                        <Button href="/resume.pdf" download variant="outlined"> RESUME</Button>
                                    </Box>
                                    <Box sx={{mt: 3}}>
                                        <Typography variant="caption">
                                            {`Let's get in touch`}
                                        </Typography>
                                    </Box>
                                    <ButtonGroup sx={{
                                        mt: 1,
                                        mb: 5
                                    }} variant="outlined">
                                        <Button startIcon={<Mail/>} href={smUrls.mail}>Email</Button>
                                        <Button startIcon={<LinkedIn/>} href={smUrls.linkedin}>LinkedIn</Button>
                                    </ButtonGroup>
                                </Container>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </main>
        </div>
    )
}

export default About