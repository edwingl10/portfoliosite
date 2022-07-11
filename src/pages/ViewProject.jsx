import React from 'react';
import { useParams } from 'react-router-dom';
import Projects from '../data/Projects';
import {
  Container,
  Grid,
  Typography,
  Button,
  Link as MuiLink,
} from '@mui/material';
import PlaceholderImg from '../img/placeholder.jpg';

export default function ViewProject() {
  const { id } = useParams();
  const project = Projects.filter((p) => p.id == id)[0];

  return (
    <Container>
      <Grid
        container
        direction={{ xs: 'column-reverse', md: 'row' }}
        spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" paragraph color="secondary">
            {project.name}
          </Typography>
          <Typography variant="h5" paragraph>
            {project.overview}
          </Typography>

          <Button
            component={MuiLink}
            color="secondary"
            variant="contained"
            sx={{ mt: 2 }}>
            Website
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <img
            src={PlaceholderImg}
            alt="placeholder"
            style={{ width: '100%', height: '75%', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        direction={{ xs: 'column-reverse', md: 'row' }}
        spacing={3}>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
          <img
            src={PlaceholderImg}
            alt="placeholder"
            style={{ width: '100%', height: '75%', objectFit: 'cover' }}
          />
        </Grid>

        <Grid item>
          <Typography variant="h3" paragraph color="primary">
            The Project
          </Typography>
          <Typography paragraph color="primary">
            {project.description}
          </Typography>

          <Button
            component={MuiLink}
            color="secondary"
            variant="contained"
            sx={{ mt: 2 }}>
            Share
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
