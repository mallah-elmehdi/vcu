import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import 'swiper/css';
import Bg from '../../../assets/background/blob-1.png';
import Leaf from '../../../assets/utils/leaf.png';
import { Card, Img, Title } from '../../../components';
import { ABOUT_US_EN } from '../../../constants/landing';
import { NAVBAR_PAGES_EN } from '../../../constants/navbar';

const AboutUs = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
            })}
        >
            <Container id={NAVBAR_PAGES_EN[0].id} sx={{ alignSelf: 'center' }}>
                <Title>About Us</Title>
                <Grid container spacing={5} alignItems="center">
                    <Grid item md={6}>
                        <Stack spacing={3}>
                            <Title zigzag>Social innovation Lab</Title>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.md,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.black,
                                    textAlign: 'justify',
                                })}
                            >
                                A space for social innovation, action research and co-construction that supports populations, actors and
                                private or public organizations in the reflection and development of their social projects at the local,
                                regional, national, and African levels.
                            </Typography>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.md,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.black,
                                    textAlign: 'justify',
                                })}
                            >
                                Our dedication is focused on designing innovative and sustainable solutions to support the socio-economic
                                development of communities.
                            </Typography>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.md,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.black,
                                    textAlign: 'justify',
                                })}
                            >
                                Our work methodology is based on four distinctive steps:
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={6}>
                        <Grid container spacing={4}>
                            {ABOUT_US_EN.map((item, index) => (
                                <Grid item sm={index === 0 || index === 3 ? 5.2 : 6.8} xs={12}>
                                    <Card
                                        sx={(theme) => ({
                                            background: theme.gradient.secondaryOne,
                                            // backgroundColor: alpha(theme.palette.secondary.main, 0.5),
                                            py: 5,
                                            position: 'relative',
                                        })}
                                    >
                                        <Img
                                            sx={(theme) => ({
                                                position: 'absolute',
                                                top: -40,
                                                right: -30,
                                                width: 100,
                                                zIndex: 0,
                                                WebkitFilter: 'drop-shadow(0px 6px 6px rgba(0,0,0,0.2))',
                                                filter: 'drop-shadow(0px 6px 6px rgba(0,0,0,0.2))',
                                                transform: 'rotate(180deg)',
                                            })}
                                            src={Leaf}
                                        />
                                        <Stack spacing={1}>
                                            <Typography
                                                sx={(theme) => ({
                                                    fontSize: theme.fontSize.xl,
                                                    fontWeight: theme.fontWeight.semibold,
                                                    // color: theme.palette.primary.main,
                                                    color: theme.palette.common.white,
                                                    textAlign: 'center',
                                                })}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                sx={(theme) => ({
                                                    fontSize: theme.fontSize.md,
                                                    fontWeight: theme.fontWeight.light,
                                                    // color: theme.palette.common.black,
                                                    color: theme.palette.common.white,
                                                    textAlign: 'center',
                                                })}
                                            >
                                                {item.desc}
                                            </Typography>
                                        </Stack>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutUs;
