import Typography from '@mui/material/Typography';

import { Card, CardContent, CardMedia, CardActionArea, CardActions, Button } from '@mui/material';

interface ProjectCardProps {
    title: string;
    className?: string;
    description: string;
    image: string;
    link: string;
}


export function ProjectCard({ title, className, description, image, link }: ProjectCardProps) {
    return (
        <Card className={className} variant="outlined" sx={{ width: 360, borderRadius: 5 }}>
            <CardActionArea href={link}>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
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