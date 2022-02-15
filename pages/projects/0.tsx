import type { NextPage } from 'next'
import { Container, Typography, Card, CardActions, CardContent, Button, Grid, Box, CardActionArea, CardMedia, Paper } from '@mui/material'
import Iframe from 'react-iframe'
import Image from 'next/image'
import styles from '../../styles/projects/0.module.css'

const Project0: NextPage = () => {
    const cardWidth = 360
    const cardHeight = 110
    const cover = '/images/project0/cover.png'
    const paperWireframe = '/images/project0/paper_wfireframe.jpg'
    const l1 = '/images/project0/wireframe/1.png'
    const l2 = '/images/project0/wireframe/2.png'
    const l3 = '/images/project0/wireframe/3.png'

    return (
        <Container>
            <Typography sx={{ mt: 3 }} variant="h1" component="h2" align="center" className="cover-title" fontWeight="500">
                Foody
            </Typography>
            <Typography sx={{ mt: 1, mb: 3 }} variant="h5" component="h2" align="center" className="cover-title" fontWeight="300">
                A mobile food ordering app for a Restaurant.
            </Typography>
            <img src={cover} className={styles.cover_page} />
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center" spacing={2}
            >
                <Grid item  >
                    <Card variant="outlined" sx={{ width: cardWidth, height: cardHeight, borderColor: '#dae2ef', borderRadius: 3 }}>
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
                    <Card variant="outlined" sx={{ width: cardWidth, height: cardHeight, borderColor: '#dae2ef', borderRadius: 3 }}>
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
                                    Create a smooth experience between opening an app for first time to order their favourite food with any waste of time.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item  >
                    <Card variant="outlined" sx={{ width: cardWidth, height: cardHeight, borderColor: '#dae2ef', borderRadius: 3 }}>
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
                                    This projects aims to target people with all age group. Especially people are busy in their lives and can't cook their own food.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

            <Typography sx={{ mt: 3, mb: 3 }} variant="h4" fontWeight="700"  >
                Key challenges and Constraints
            </Typography>
            <Typography variant="h6" fontWeight="400" align="justify" color="text.secondary" maxWidth="300px" >
                Key Challenge were to provide a good user expercince for next billion users.
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
                        <img className={styles.image_wireframe} width="350px" src={l1} />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper elevation={2} sx={{ borderRadius: 6 }} >
                        <img className={styles.image_wireframe} width="350px" src={l2} />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper elevation={2} sx={{ borderRadius: 6 }} >
                        <img className={styles.image_wireframe}  width="350px" src={l3} />
                    </Paper>
                </Grid>
            </Grid>
            <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                User testing Results
            </Typography>

            <Typography sx={{ mt: 3, ml: 3 }} variant="h6" fontWeight="300" >
                Round 1
            </Typography>
            <ul>
                <li>
                    <Typography variant="h6" fontWeight="400" >
                        3 out 5 participants found it difficult to find their orders from home screen.
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6" fontWeight="400" >
                        4 out 5 participants found it difficult to fill their address.
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6" fontWeight="400" >
                        4 out 5 participants opened cart screen instead of selecting their food.
                    </Typography>
                </li>
            </ul>
            <Typography sx={{ mt: 3, ml: 3 }} variant="h6" fontWeight="300" >
                Round 2
            </Typography>
            <ul>
                <li>
                    <Typography variant="h6" fontWeight="400" >
                        5 out 5 participants want to filter food recommendation based on type such as western, veg , etc
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6" fontWeight="400" >
                        4 out 5 participants wanted to choose size of the food.
                    </Typography>
                </li>
                <li>
                    <Typography variant="h6" fontWeight="400" >
                        4 out 5 people wanted to have option to choose from multiple address
                    </Typography>
                </li>
            </ul>
            <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                Mockups
            </Typography>


            <Iframe className={styles.iframe_margin} url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWJ0W8g4n5uRZyh19wLX5xh%2FFoody%3Fnode-id%3D301%253A817"
                width="100%"
                height="800px"
                allowFullScreen
            />
            <Iframe className={styles.iframe_margin} url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWJ0W8g4n5uRZyh19wLX5xh%2FFoody%3Fnode-id%3D307%253A498%26scaling%3Dscale-down%26page-id%3D301%253A817%26starting-point-node-id%3D307%253A498%26show-proto-sidebar%3D1"
                width="100%"
                height="800px"
                allowFullScreen
            />
            <Typography sx={{ mt: 3 }} variant="h4" fontWeight="700" >
                Takeways
            </Typography>
            <Typography sx={{ mt: 3, mb: 3 }} variant="body1" fontWeight="500" color="text.secondary">
                While working on this project i have learned various skills and importance of accessibility. Usability studies and peers feedback was one of the most important   inflactal in each iteration of the app’s look and feel.
            </Typography>


        </Container>
    )
}

export default Project0