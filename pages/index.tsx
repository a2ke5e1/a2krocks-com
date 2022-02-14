import type { NextPage } from 'next'

import { ProjectCard } from '../components/ProjectCard';
import { Grid } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Grid container
      direction="row"
      justifyContent="center"
      alignItems="center" spacing={2}
      sx={{
        mt: 2,
        mb: 2,
      }}
    >
      <Grid item >
        <ProjectCard
          title="Project: 0"
          description="A mobile food ordering app designed for a local restaurant."
          image='/images/project0/cover.png'
          link="/projects/0"
        />
      </Grid>
      <Grid item >
        <ProjectCard
          title="Project: 1"
          description="An educationl website for learning programming by finding and viewing coding tutorials."
          image='/images/project1/cover.png'
          link="/projects/1"
        />
      </Grid>
      <Grid item >
        <ProjectCard
          title="Project: 2"
          description="A tool for communities to ensure that everyone has access to necessary medicine."
          image='/images/project2/cover.png'
          link="/projects/2"
        />
      </Grid>
      <Grid item >
        <ProjectCard
          title="Project: 3"
          description="An android app which shows progress of the day, month and year."
          image='/images/project2/cover.png'
          link="/projects/3"
        />
      </Grid>
    </Grid>
  )
}

export default Home
