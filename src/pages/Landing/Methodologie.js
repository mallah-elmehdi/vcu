import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Card, Title } from '../../components';
import { Accordion, AccordionDetails, AccordionSummary } from '../../components/Accordions';
import { HOW_IT_WORKS } from '../../constants/landing';

const Methodologie = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container sx={{ alignSelf: 'center' }}>
            <Title zigzag withPadding>
                Notre méthodologie d'intervention
            </Title>

            <Grid container spacing={10}>
                <Grid item md={6} xs={12}>
                    <Card
                        sx={(theme) => ({
                            background: theme.gradient.secondary,
                        })}
                    ></Card>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Grid container spacing={5}>
                        {HOW_IT_WORKS.map((item, index) => (
                            <Grid item xs={12}>
                                <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
                                    <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
                                        <Box gap={1} display="flex" alignItems="center">
                                            <Avatar
                                                sx={(theme) => ({
                                                    width: 40,
                                                    height: 40,
                                                    color: theme.palette.primary.main,
                                                    fontSize: theme.fontSize['2xl'],
                                                    backgroundColor: 'transparent',
                                                })}
                                            >
                                                {item.image}
                                            </Avatar>
                                            <Typography
                                                sx={(theme) => ({
                                                    fontWeight: theme.fontWeight.light,
                                                    fontSize: theme.fontSize.lg,
                                                })}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
                                            id dignissim quam.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Methodologie;
