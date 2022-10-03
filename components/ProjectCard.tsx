import Typography from '@mui/material/Typography';

import {Card, CardContent, CardMedia, CardActionArea, CardActions, Button} from '@mui/material';


export enum ProjectType {
    UX_UI = "UX/UI Design",
    ANDROID_APP = "Android App"
}

interface ProjectCardProps {
    title: string;
    className?: string;
    type: ProjectType;
    description: string;
    image: string;
    link: string;
}


export function ProjectCard({title, className, type, description, image, link}: ProjectCardProps) {
    return (
        <Card className={className} variant="outlined" sx={{width: 360, borderRadius: 5}}>
            <CardActionArea href={link}>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{mb: -0.5}} fontSize={10} color="text.secondary">
                        {type}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={link} size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}