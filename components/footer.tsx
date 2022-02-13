import type { NextPage } from 'next'
import styles from '../styles/footer.module.css'

import { Grid, Container, Divider, Typography, IconButton } from '@mui/material'
import { LinkedIn, Twitter, YouTube, MailOutline, GitHub } from '@mui/icons-material'

const Footer: NextPage = () => {

    const linkedinURL = "https://www.linkedin.com/in/a2krocks/"
    const twitterURL = "https://twitter.com/a2krocks"
    const youtubeURL = "https://www.youtube.com/channel/UCvPYsqZOD55Ri--1votZnaA"
    const mailURL = "mailto:aakapurv@gmail.com"
    const githubURL = "https://www.github.com/a2krocks"

    return (
        <div>
            <Divider light />
            <Grid container direction="column" justifyContent="space-between" alignItems="center" sx={{
                pt: 2
            }} >
            <Grid item>
              <IconButton color="inherit" href={mailURL} aria-label="Email">
                  <MailOutline />
              </IconButton>
              <IconButton color="inherit" href={githubURL} aria-label="Email">
                  <GitHub />
              </IconButton>
              <IconButton color="inherit" href={linkedinURL} aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" href={twitterURL} aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href={youtubeURL} aria-label="Youtube">
                <YouTube />
              </IconButton>
            </Grid>
            <Grid item >
              <Typography textAlign="center" >
                &copy;2022. All Rights Reserved to Apurv Ajay Kumar.
              </Typography>
            </Grid>
          </Grid>
        </div>
    )
}

export default Footer; 