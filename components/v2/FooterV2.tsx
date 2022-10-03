import type {NextPage} from 'next'

import {Box, Grid, Typography} from '@mui/material'
import SocialMedia from "../v2/SocialMedia";
import SocialMediaUrls from "../../Info/SocialMediaUrls";
import AboutMe from "../../Info/AboutMe";
import Link from "next/link";
import styles from "../../styles/components/v2/footer.module.css"
import Image from "next/image";

const smUrl = new SocialMediaUrls();
const abtMe = new AboutMe();


// Left Side of the footer where all my social media info belongs
const SocialMediaSide = (
    <Box>
        <Typography textAlign="left" fontWeight="bold" sx={{ml: 1.5}}>
            {abtMe.mName}
        </Typography>
        <Link href={smUrl.mail}>
            <Typography textAlign="left" fontWeight="lighter" sx={{ml: 1.5, mb: 2}}>
                {abtMe.mail}
            </Typography>
        </Link>
        {SocialMedia}
    </Box>
)

const HostedOn = (
    <Box className={styles.hosted_on} sx={{ml: 1.5}}>
        <Typography textAlign="left" fontWeight="lighter">
            Hosted On
        </Typography>
        <Image className={styles.vercel_logo} src="/vercel.svg" width={150} height={50}/>
    </Box>
)


const BuildWith = (
    <Box className={styles.hosted_on} sx={{ml: 1.5}}>
        <Typography textAlign="left" fontWeight="lighter">
            Build With
        </Typography>
        <Image className={styles.vercel_logo} src="/nextjs.png" width={80} height={80}/>
    </Box>
)

const Footer: NextPage = () => {

    return (
        <Box className={styles.background} sx={{ mt: 8 }}>
            <Grid container spacing={4}>
                <Grid item xs={9.8}>
                    {SocialMediaSide}
                </Grid>

                <Grid item >
                    {HostedOn}
                </Grid>
                <Grid item >
                    {BuildWith}
                </Grid>

            </Grid>
        </Box>
    )
}

export default Footer;