
import { Box, Container, Divider, ImageList, ImageListItem, Typography } from "@mui/material";
import { NextPage } from "next";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import FooterV2 from "../../components/v2/FooterV2";
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from "next/head";

import { Metadata } from 'next'


// layout.js or page.js

export const metadata: Metadata = {
    title: '3D Renders - Apurv Ajay Kumar',
    description: 'List of all the 3D render artworks done by Apurv Ajay Kumar',
    openGraph: {
      type: 'website',
      url: 'https://www.a2krocks.com/renders',
      title: '3D Renders - Apurv Ajay Kumar',
      description: 'List of all the 3D render artworks done by Apurv Ajay Kumar',
      images: [
        {
          url: "/images/renders/glasses.png", // Ensure that imageUrl is defined or imported accordingly
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: 'https://www.a2krocks.com/renders',
      title: '3D Renders - Apurv Ajay Kumar',
      description: 'List of all the 3D render artworks done by Apurv Ajay Kumar',
      images: ["/images/renders/glasses.png"], // Ensure that imageUrl is defined or imported accordingly
    },
  };
  


const RenderPage: NextPage = () => {

    

    const imageUrl = artwork[Math.floor(Math.random() * artwork.length)].img

    return (
        <>
            <Container maxWidth="xl">
                <Typography variant='h3' fontWeight="lighter" component="h1" sx={{ pt: 2, pb: 0 }} >
                    My 3D Artwork
                </Typography>
                <Typography variant='body1' fontWeight="400" sx={{ pt: 2, pb: 1 }} >
                    These all of the images are 3D modeled and 3D rendered using blender over time.
                </Typography>
                <Divider />
                <ImageList cols={3} sx={{ pt: 2 }} >
                    {artwork.map((item) => (
                        <ImageListItem key={item.img}  >
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </>
    )
}
export default RenderPage;

const artwork = [
    {
        img: "/images/renders/test4.png",
        title: "Donout with Tea"
    },
    {
        img: "/images/renders/donout3.png",
        title: "Donout 2"
    },
    {
        img: "/images/renders/donout2.png",
        title: "Donout with Utils"
    },
    {
        img: "/images/renders/donout.png",
        title: "Donout"
    },
    {
        img: "/images/renders/background.png",
        title: "Baxkground Artwork"
    },
    {
        img: "/images/renders/glasses.png",
        title: "Glasses"
    },
    {
        img: "/images/renders/dagger.png",
        title: "Dagger"
    },
    {
        img: "/images/renders/knife.png",
        title: "Dagger 2"
    },
    {
        img: "/images/renders/ice_cream.jpg",
        title: "Ice Cream"
    },
    {
        img: "/images/renders/image0005.png",
        title: "Logo V2"
    },
    {
        img: "/images/renders/logo_wall.png",
        title: "Logo"
    },
    {
        img: "/images/renders/room.jpg",
        title: "My Unfinised Room"
    },
    {
        img: "/images/renders/phycalc3.png",
        title: "Physics Calculator Logo with Style"
    },
]