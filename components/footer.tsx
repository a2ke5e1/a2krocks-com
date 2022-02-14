import type { NextPage } from 'next'
import styles from '../styles/footer.module.css'

import { Grid, Container, Divider, Typography, IconButton } from '@mui/material'
import { LinkedIn, Twitter, YouTube, MailOutline, GitHub } from '@mui/icons-material'

import SocialMediaUrls from './socialMediaUrls'

const Footer: NextPage = () => {

    const smUrls = new SocialMediaUrls()
   
    return (
        <div>
            <Divider  />
            <Grid container direction="column" justifyContent="space-between" alignItems="center" sx={{
                pt: 2, 
                pb: 2,
            }} >
            <Grid item>
              <IconButton color="inherit" href={smUrls.mail} aria-label="Email">
                  <MailOutline />
              </IconButton>
              <IconButton color="inherit" href={smUrls.github} aria-label="Email">
                  <GitHub />
              </IconButton>
              <IconButton color="inherit" href={smUrls.linkedin} aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" href={smUrls.twitter} aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href={smUrls.youtube} aria-label="Youtube">
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