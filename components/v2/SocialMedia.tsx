import {Box, IconButton} from "@mui/material";
import {FacebookOutlined, GitHub, Instagram, LinkedIn, Twitter, YouTube} from "@mui/icons-material";
import SocialMediaUrls from "../../Info/SocialMediaUrls";

const smUrls = new SocialMediaUrls();
const socialMedia = (
    <Box>
        <IconButton color="inherit" href={smUrls.facebook} aria-label="Email">
            <FacebookOutlined/>
        </IconButton>
        <IconButton color="inherit" href={smUrls.instagram} aria-label="Instagram">
            <Instagram/>
        </IconButton>
        <IconButton color="inherit" href={smUrls.github} aria-label="Email">
            <GitHub/>
        </IconButton>
        <IconButton color="inherit" href={smUrls.linkedin} aria-label="LinkedIn">
            <LinkedIn/>
        </IconButton>
        <IconButton color="inherit" href={smUrls.twitter} aria-label="Twitter">
            <Twitter/>
        </IconButton>
        <IconButton color="inherit" href={smUrls.youtube} aria-label="Youtube">
            <YouTube/>
        </IconButton>
    </Box>
);
export default socialMedia;