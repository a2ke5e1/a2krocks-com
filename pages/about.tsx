import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Typography, Grid, Box, Card, Stack, Container, Button, ButtonGroup } from '@mui/material'
import { Mail, LinkedIn } from '@mui/icons-material'

import SocialMediaUrls from '../components/socialMediaUrls'

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
                            <Image src="/images/logo.jpg" alt="My Logo" />
                        </Grid>
                        <Grid item xs >
                            <Container>
                                <a className="greeting-name">
                                    Hello! I am Apurv!
                                </a>
                                <Box sx={{ mt: 1 }}>
                                    <Typography align="justify" component="p" color="" variant="subtitle1">
                                        I am currently a B.Tech Student studying at Haldia Institute Of Technology. I like to work on UX and bring designs to life.
                                        I also like to develop android apps.
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