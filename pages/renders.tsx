import { Box, Container, Divider, ImageList, ImageListItem, Typography } from "@mui/material";
import { NextPage } from "next";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import FooterV2 from "../components/v2/FooterV2";
import useMediaQuery from '@mui/material/useMediaQuery';


function imageListCol() {
    const isWidth900 = useMediaQuery('(max-width: 900px)');
    const isWidth400 = useMediaQuery('(max-width: 400px)');

    if (!isWidth900) {
        return 3;
    }

    if (isWidth400) {
        return 1;
    }

    return 2;
}

const RenderPage: NextPage = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Container maxWidth="xl">
                <Typography variant='h3' fontWeight="lighter" component="h1" sx={{ pt: 2, pb: 0 }} >
                    My 3D Artwork
                </Typography>
                <Typography variant='body1' fontWeight="400" sx={{ pt: 2, pb: 1 }} >
                    These all of the images are 3D modeled and 3D rendered using blender over time.
                </Typography>
                <Divider />
                <ImageList cols={imageListCol()} sx={{ pt: 2 }} >
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
            <FooterV2 />
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