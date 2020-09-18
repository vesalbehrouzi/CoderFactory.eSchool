import React from 'react';
import { Container, Grid } from '@material-ui/core';
import CourseCard from './course-card';

function CourseListContainer() {
    return (
        <Container maxWidth="lg">
            <h1>Courses</h1>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard></CourseCard>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard></CourseCard>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard></CourseCard>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard></CourseCard>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard></CourseCard>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <CourseCard></CourseCard>
                </Grid>
            </Grid>
        </Container>

    );
}

export default CourseListContainer;