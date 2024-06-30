import type { NextPage } from 'next'
import Head from 'next/head'

import { Typography, Grid, Box, Container, Divider, List, ListItem } from '@mui/material'
import { School, Work, Code, BuildOutlined, Build } from '@mui/icons-material'

import SocialMediaUrls from '../../Info/SocialMediaUrls'

import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import FooterV2 from '../../components/v2/FooterV2';




const About: NextPage = () => {

    const smUrls = new SocialMediaUrls()
    const age: number = new Date().getFullYear() - 2002;

    const gridMinWidth = 269;
    const gridTopPadding = 3

    const gridSx = {
        pt: gridTopPadding
    }

    return (
        <div>
            <Head>
                <title>About Apurv Ajay Kumar</title>
                <meta name="title" content="About Apurv Ajay Kumar" />
                <meta name="description" content="I am Apurv, a student at Haldia Institute of Technology pursing a B.Tech in IT" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.a2krocks.com/about" />
                <meta property="og:title" content="About Apurv Ajay Kumar" />
                <meta property="og:description" content="I am Apurv, a student at Haldia Institute of Technology pursing a B.Tech in IT" />
                <meta property="og:image" content="/imagees/logo.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.a2krocks.com/about" />
                <meta property="twitter:title" content="About Apurv Ajay Kumar" />
                <meta property="twitter:description" content="I am Apurv, a student at Haldia Institute of Technology pursing a B.Tech in IT" />
                <meta property="twitter:image" content="/imagees/logo.jpg" />

            </Head>
            <main>
                <Container maxWidth="xl">
                    <Typography variant='subtitle2' component="h6" sx={{ pt: 2, pb: 1 }} >
                        About Me
                    </Typography>
                    <Grid container spacing={2} sx={{ pt: 2, pb: 1 }}>
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant='h3' color={"primary"}>
                                    {"Hello, "}
                                </Typography>
                                <Typography variant='h4' display={"inline"}>
                                    {"I am  Apurv Ajay Kumar."}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Box minWidth={gridMinWidth} sx={gridSx} >
                                <Work color='primary' />
                                <Typography variant='h6' color="primary" fontWeight={400}  >
                                    {"Experince"}
                                </Typography>
                                <List>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"SDE Intern"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"duuet.care"}
                                            </Typography>
                                            <Typography variant='caption' fontWeight={300} paddingTop={1}   >
                                                {"Dec, 2023 - Jan, 2024"}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"Web & App Developer"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"The HIT Times"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Haldia Institute of Technology"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Haldia, West Bengal"}<br />{"India"}
                                            </Typography>
                                            <Typography variant='caption' fontWeight={300} paddingTop={1}   >
                                                {"2021-Present"}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"Graphics Designer"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"IEEE HIT SB"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Haldia Institute of Technology"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Haldia, West Bengal"}<br />{"India"}
                                            </Typography>
                                            <Typography variant='caption' fontWeight={300} paddingTop={1}   >
                                                {"2021-2023"}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Box minWidth={gridMinWidth} sx={gridSx} >
                                <School color='primary' />
                                <Typography variant='h6' color="primary" fontWeight={400}  >
                                    {"Education"}
                                </Typography>
                                <List>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
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
                                            <Typography variant='body1' fontWeight={400}   >
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
                                            <Typography variant='body1' fontWeight={400}   >
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
                            <Box minWidth={gridMinWidth} sx={gridSx} >
                                <Code color="primary" />
                                <Typography color="primary" variant='h6' fontWeight={400}  >
                                    {"Languages &  Frameworks"}
                                </Typography>

                                <List>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"Android Dev"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Kotlin, Java, Jetpack Compose, Firebase and Material Design"}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"Web Technologies"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"HTML, CSS, Javascript, Typescript, SASS, React, Next.js, Node, Flask & Django - Python."}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"Others"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"C, C++, mySQL, postresSQL, and Flutter"}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Box minWidth={gridMinWidth} sx={gridSx} >
                                <Build color="primary" />
                                <Typography color="primary" variant='h6' fontWeight={400}  >
                                    {"Tools"}
                                </Typography>

                                <List>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"3D Design"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Blender."}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"UX/UI Design"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Figma and Adobe XD."}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"Graphics Design"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Adobe Photoshop and Inkscape."}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"IDEs and Text Editors"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"IntelliJ IDEA, Pycharm, Android Studio and VS Code."}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                    <ListItem sx={{ pl: 0, pt: 1 }}>
                                        <Box>
                                            <Typography variant='body1' fontWeight={400}   >
                                                {"Office"}
                                            </Typography>
                                            <Typography variant='body2' fontWeight={300}   >
                                                {"Word, Excel, Access and Powerpoint."}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default About