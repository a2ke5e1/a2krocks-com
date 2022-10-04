import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {Typography, Grid, Box, Card, Stack, Container, Button, ButtonGroup} from '@mui/material'
import {Mail, LinkedIn} from '@mui/icons-material'

import SocialMediaUrls from '../Info/SocialMediaUrls'
import styles from '../styles/About.module.css'

import ResponsiveAppBar from '../components/ResponsiveAppBar';
import FooterV2 from '../components/v2/FooterV2';

const About: NextPage = () => {

    const smUrls = new SocialMediaUrls()
    const age: number = new Date().getFullYear() - 2002;

    return (
        <div>
            <Head>
                <title>About - Apurv Ajay Kumar</title>
            </Head>
            <ResponsiveAppBar />
            <main>
                <Container sx={{
                    height: 800
                }}>

                </Container>
            </main>
            <FooterV2 />
        </div>
    )
}

export default About