import type {NextPage} from 'next'

import {Box, Typography} from '@mui/material'
import SocialMedia from "../v2/SocialMedia";
import SocialMediaUrls from "../../Info/SocialMediaUrls";
import AboutMe from "../../Info/AboutMe";
import Link from "next/link";
import styles from "../../styles/components/v2/footer.module.css"

const smUrl = new SocialMediaUrls();
const abtMe = new AboutMe();


// Left Side of the footer where all my social media info belongs
const SocialMediaSide = (
    <Box>
        <Typography textAlign="left" fontWeight="bold" sx={{ml: 1.5, pt: 2}}>
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


const Footer: NextPage = () => {

    return (
        <Box className={styles.background}>
            {SocialMediaSide}
        </Box>
    )
}

export default Footer;