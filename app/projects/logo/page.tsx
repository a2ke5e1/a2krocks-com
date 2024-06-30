import type { NextPage } from 'next'
import { Container, Typography, Card, CardActions, CardContent, Button, Grid, Box, CardActionArea, CardMedia, Paper } from '@mui/material'
import Iframe from 'react-iframe'
import Image from 'next/image'
import styles from '../../../styles/projects/0.module.css'
import ResponsiveAppBar from '../../../components/ResponsiveAppBar';
import FooterV2 from '../../../components/v2/FooterV2';
import Head from 'next/head'


const Project1: NextPage = () => {

    const cardWidth = 360
    const cardHeight = 110
    const cover = '/images/project1/cover.png'
    const paperWireframe = '/images/project1/paper_wireframe.png'
    const l1 = '/images/project1/wireframe/1.png'
    const l2 = '/images/project1/wireframe/2.png'
    const l3 = '/images/project1/wireframe/3.png'

    return (
        <>
            <Head>
                <title>Logo - coding tutorials</title>
                <meta name="title" content="Logo - coding tutorials" />
                <meta name="description" content="A website for finding and viewing coding tutorials" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.a2krocks.com/projects/logo" />
                <meta property="og:title" content="Logo - coding tutorials" />
                <meta property="og:description" content="A website for finding and viewing coding tutorials" />
                <meta property="og:image" content="/images/project1/cover.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.a2krocks.com/projects/logo" />
                <meta property="twitter:title" content="Logo - coding tutorials" />
                <meta property="twitter:description" content="A website for finding and viewing coding tutorials" />
                <meta property="twitter:image" content="/images/project1/cover.png" />
            </Head>
            <Container>
                <Typography sx={{ mt: 3 }} variant="h1" component="h2" align="center" className="cover-title" fontWeight="500">
                    LOGO
                </Typography>
                <Typography sx={{ mt: 1, mb: 3 }} variant="h5" component="h2" align="center" className="cover-title" fontWeight="300">
                    A website for finding and viewing coding tutorials
                </Typography>
                <img src={cover} className={styles.cover_page} />
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center" spacing={2}
                >
                    <Grid item  >
                        <Card variant="outlined" className={styles.aryclic} sx={{ width: cardWidth, height: cardHeight, borderColor: '#dae2ef', borderRadius: 3 }}>
                            <CardActionArea >
                                {/* <CardMedia
                                component="img"
                                height="200"
                                image={cover0}
                                alt="green iguana"
                            /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 14 }}>
                                        My Role
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        I was working alone on this project, hence I was the lead UX Designer and Researcher throught the whole project.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item  >
                        <Card variant="outlined" className={styles.aryclic} sx={{ width: cardWidth, height: cardHeight, borderColor: '#dae2ef', borderRadius: 3 }}>
                            <CardActionArea >
                                {/* <CardMedia     
                                component="img"
                                height="200"
                                image={cover0}
                                alt="green iguana"
                            /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 14 }}>
                                        Project Goal
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Goal of project to provide high quality tutorials and to have a discussion for better understanding.     </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item  >
                        <Card variant="outlined" className={styles.aryclic} sx={{ width: cardWidth, height: cardHeight, borderColor: '#dae2ef', borderRadius: 3 }}>
                            <CardActionArea >
                                {/* <CardMedia
                                component="img"
                                height="200"
                                image={cover0}
                                alt="green iguana"
                            /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: 14 }}>
                                        Target Audience
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="justify" >
                                        {"This projects aims to target people with all age group. Especially people are busy in their lives and can't cook their own food."}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

                <Typography sx={{ mt: 3, mb: 3 }} variant="h4" fontWeight="700"  >
                    Key challenges and Constraints
                </Typography>
                <Typography variant="h6" fontWeight="400" align="justify" color="text.secondary" maxWidth="320px" >
                    Key challenges were to provide a respomsive design to mobile and web to find coding tutorials. <br /><br /> This projects aim to solve difficulty faced  during learning programing.
                </Typography>
                <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                    Initial design concepts
                </Typography>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center" spacing={2}
                >
                    <Grid item>
                        <Typography sx={{ mt: 3, maxWidth: 345, fontSize: 20 }} align="justify" fontWeight="400" variant="h6" color="text.secondary"   >
                            I did a quick ideation exercise to come up with ideas for how to address gaps identified in the competitive audit. My focus was specially on size on the actions and minimum clicks to complete a task.
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Card variant="outlined" sx={{ minWidth: cardWidth, borderColor: '#dae2ef', borderRadius: 3 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={paperWireframe}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                    Wireframes
                </Typography>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center" spacing={2}
                    sx={{ mt: 2 }}
                >
                    <Grid item>
                        <Paper elevation={2} sx={{ borderRadius: 6 }} >
                            <img width="350px" className={styles.image_wireframe} src={l1} />
                        </Paper>
                    </Grid>
                    <Grid item >
                        <Paper elevation={2} sx={{ borderRadius: 6 }} >
                            <img width="350px" className={styles.image_wireframe} src={l2} />
                        </Paper>
                    </Grid>
                    <Grid item >
                        <Paper elevation={2} sx={{ borderRadius: 6 }} >
                            <img width="350px" className={styles.image_wireframe} src={l3} />
                        </Paper>
                    </Grid>
                </Grid>
                <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                    User testing Results
                </Typography>
                <Typography sx={{ mt: 3, mb: 3 }} variant="h6" fontWeight="400" align="justify" color="text.secondary" maxWidth="320px">
                    After User Testing, We found that people wanted a way to copy code from video. So We added to side bar to copy code presented in video.

                </Typography>

                <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                    High-fidelity prototypes
                </Typography>

                <Typography sx={{ mt: 3, ml: 3 }} variant="h6" fontWeight="300" >
                    Web
                </Typography>
                <Iframe className={styles.iframe_margin} url="https://xd.adobe.com/embed/dc775c83-f017-4bc9-b330-ea90572f5820-8924/"
                    width="100%"
                    height="800px"
                    allowFullScreen
                />

                <Typography sx={{ mt: 3, ml: 3 }} variant="h6" fontWeight="300" >
                    Mobile
                </Typography>
                <Iframe className={styles.iframe_margin} url="https://xd.adobe.com/embed/476470df-3c3b-4f26-9ab0-bdfd79775582-1237/"
                    width="100%"
                    height="800px"
                    allowFullScreen
                />

                <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                    Takeways
                </Typography>
                <Typography sx={{ mt: 3, mb: 3 }} variant="body1" fontWeight="500" color="text.secondary">
                    While working on this project i have learned various skills and importance of accessibility. Usability studies and peers feedback was one of the most important   inflactal in each iteration of the app’s look and feel.<br /> <br />
                    While doing this project I have increase my knowledge and experience on using Adobe XD to create prototypes for my upcoming project. I also learned to create responsive web design.
                </Typography>


            </Container>
        </>
    );
}

export default Project1