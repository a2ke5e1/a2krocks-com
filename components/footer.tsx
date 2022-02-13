import type { NextPage } from 'next'

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
            <Grid container spacing={3}>
            <Grid item >
              <Typography variant="subtitle2" component="h2" sx={{ flexGrow: 1 }}>
                &copy;2022. All Rights Reserved to Apurv Ajay Kumar.
              </Typography>
            </Grid>
            <Grid item>
              <IconButton href={mailURL} aria-label="Email">
                  <MailOutline />
              </IconButton>
              <IconButton href={githubURL} aria-label="Email">
                  <GitHub />
              </IconButton>
              <IconButton  href={linkedinURL} aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              <IconButton  href={twitterURL} aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton  href={youtubeURL} aria-label="Youtube">
                <YouTube />
              </IconButton>
            </Grid>
          </Grid>
        </div>
    )
}

export default Footer; 