import type { NextPage } from 'next'

import { Box, Container, Grid, Typography } from '@mui/material'
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
    <Box sx={{ pt: 5, pb : 5 }} >
        <Typography textAlign="left" fontWeight="bold" sx={{ }}>
            {abtMe.mName}
        </Typography>
        <Link href={smUrl.mail}>
            <Typography textAlign="left" fontWeight="lighter" sx={{  mb: 2 }}>
                {abtMe.mail}
            </Typography>
        </Link>
        {SocialMedia}
    </Box>
)

const HostedOn = (
    <Box className={styles.hosted_on} sx={{ ml: 1.5 }}>
        <Typography textAlign="left" fontWeight="lighter">
            Hosted On
        </Typography>
        <Image className={styles.vercel_logo} src="/vercel.svg" width={150} height={50} />
    </Box>
)


const BuildWith = (
    <Box className={styles.hosted_on} sx={{ ml: 1.5 }}>
        <Typography textAlign="left" fontWeight="lighter">
            Build With
        </Typography>
        <Image className={styles.vercel_logo} src="/nextjs.png" width={80} height={80} />
    </Box>
)

const Footer: NextPage = () => {

    return (
        <Box className={styles.background} sx={{ mt: 8 }}>
            <Container maxWidth="xl">
                {SocialMediaSide}
            </Container>
        </Box>
    )
}

export default Footer;