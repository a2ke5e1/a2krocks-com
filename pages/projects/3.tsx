import { NextPage } from "next";
import {Card, CardActionArea, CardContent, Container, Grid, Typography} from "@mui/material"
import styles from "../../styles/projects/0.module.css";

import projectInfo from "../../Info/project_info/project3.json"


const ProjectYearlyProgress : NextPage = () => {

    const cardWidth = 360
    const cardHeight = "15vh"

    return (
        <Container>
            <Typography sx={{mt: 3}} variant="h1" component="h2" align="center" className="cover-title"
                        fontWeight="500">
                {projectInfo.title}
            </Typography>
            <Typography sx={{mt: 1, mb: 3}} variant="h5" component="h2" align="center" className="cover-title"
                        fontWeight="300">
                {projectInfo.description}
            </Typography>
            <img src={projectInfo.image} className={styles.cover_page}/>
            <Grid container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center" spacing={2}
            >
                <Grid item>
                    <Card variant="outlined" className={styles.aryclic}
                          sx={{width: cardWidth, height: cardHeight, borderRadius: 3}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 14}}>
                                    {projectInfo.cards.my_role.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {projectInfo.cards.my_role.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined" className={styles.aryclic}
                          sx={{width: cardWidth, height: cardHeight, borderRadius: 3}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 14}}>
                                    {projectInfo.cards.project_goal.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {projectInfo.cards.project_goal.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item>
                    <Card variant="outlined" className={styles.aryclic}
                          sx={{width: cardWidth, height: cardHeight, borderRadius: 3}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 14}}>
                                    {projectInfo.cards.project_goal.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="justify">
                                    {projectInfo.cards.project_goal.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>

        </Container>
    )
}

export default ProjectYearlyProgress