import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Typography, Grid, Box, Card, Stack, Container, Button, ButtonGroup, Divider, List, ListItem } from '@mui/material'
import { Mail, LinkedIn } from '@mui/icons-material'

import SocialMediaUrls from '../Info/SocialMediaUrls'
import styles from '../styles/About.module.css'

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import FooterV2 from '../components/v2/FooterV2';




const About: NextPage = () => {

    const smUrls = new SocialMediaUrls()
    const age: number = new Date().getFullYear() - 2002;


    return (
        <div>
            <Head>
                <title>About - Apurv Ajay Kumar</title>
            </Head>
            <ResponsiveAppBar />
            <main>
                <Container maxWidth="xl" sx={{
                    height: 800
                }}>
                    <Typography variant='h3' fontWeight="lighter" component="h1" sx={{ pt: 2, pb: 1 }} >
                        About Me
                    </Typography>
                    <Divider />
                    <Grid container spacing={2} sx={{ pt: 2, pb: 1 }}>
                        <Grid item xs={6}>
                            <Box>
                                <Typography variant='h3' color={"primary"}>
                                    {"Hello, "}
                                </Typography>
                                <Typography variant='h4' display={"inline"}>
                                    {"I am  Apurv Ajay Kumar."}
                                </Typography>
                            </Box>
                            <Box sx={{ pt: 3 }}>
                                <Typography variant='h6' fontWeight={400}  >
                                    {"Education"}
                                </Typography>
                                <List>
                                    <ListItem sx={{ pl: 0 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={300}   >
                                                {"Bachelor of Technology in Information Technology"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Haldia Institute of Technology"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Haldia, West Bengal"}<br />{"India"}
                                            </Typography>
                                            <Typography variant='caption' fontWeight={300} paddingTop={1}   >
                                                {"2021-2025"}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={300}   >
                                                {"Senior Secondary Education"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"A.S. Patna Central School"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Patna, Bihar"}<br />{"India"}
                                            </Typography>
                                            <Typography variant='caption' fontWeight={300} paddingTop={1}   >
                                                {"2019-2021"}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={300}   >
                                                {"Secondary Education"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"A.S. Patna Central School"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Patna, Bihar"}<br />{"India"}
                                            </Typography>
                                            <Typography variant='caption' fontWeight={300} paddingTop={1}   >
                                                {"2017-2019"}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Box minWidth={250} >
                                <img width={"100%"} src='/images/logo.jpg' />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <FooterV2 />
        </div>
    )
}

export default About