import { Avatar, Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import Image from '../../assets/landing/slide-2.jpg';
import { Img, Title } from '../../components';
import { VISION } from '../../constants/landing';
import Leaf from '../../assets/utils/leaf.png';

const Vision = () => {
    return (
        <Container sx={{ alignSelf: 'center' }}>
            <Grid container spacing={10} alignItems="center">
                <Grid item md={6} xs={12}>
                    <Stack spacing={3}>
                        <Box
                            sx={(theme) => ({
                                height: { sm: 350, xs: 250 },
                                width: { sm: 350, xs: 250 },
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
                                })}
                                src={Leaf}
                            />
                            <Box
                                sx={(theme) => ({
                                    height: { sm: 350, xs: 250 },
                                    width: { sm: 350, xs: 250 },
                                    borderRadius: theme.borderRadius.full,
                                    background: theme.gradient.secondary,
                                    position: 'absolute',
                                    top: '50%',
                                    left: 0,
                                    transform: 'translateY(-50%)',
                                })}
                            />

                            <CardMedia
                                image={Image}
                                sx={(theme) => ({
                                    height: { sm: 350, xs: 250 },
                                    width: { sm: 350, xs: 250 },
                                    borderRadius: theme.borderRadius.full,
                                    position: 'absolute',
                                    top: -10,
                                    left: 10,
                                    boxShadow: theme.shadows[10],
                                })}
                            />
                        </Box>
                        <Title zigzag>Notre Vision</Title>
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.md,
                                fontWeight: theme.fontWeight.light,
                                color: theme.palette.common.black,
                            })}
                        >
                            Notre vision est celle d'une unité de développement de chaînes de valeur qui agit comme un catalyseur de
                            transformation positive. Nous travaillons avec passion pour créer un écosystème où les agriculteurs, artisans et
                            professionnels prospèrent, où les communautés s'épanouissent, et où l'impact de nos efforts se fait ressentir à
                            travers une amélioration tangible des conditions de vie. Notre engagement envers une synergie efficace au sein
                            des chaînes de valeur est le socle sur lequel repose notre quête d'un avenir plus prospère et durable pour tous.
                            Notre vision s'articule autour de plusieurs principes fondamentaux :
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item md={6} xs={12}>
                    {/* <Grid container spacing={3}> */}
                    <Stack spacing={2}>
                        {VISION.map((item) => (
                            <Box display="flex" alignItems="center" gap={2}>
                                <Avatar
                                    sx={(theme) => ({
                                        backgroundColor: 'transparent',
                                        width: 10,
                                        height: 10,
                                        color: theme.palette.secondary.main,
                                    })}
                                >
                                    <BsFillCircleFill />
                                </Avatar>
                                <Stack>
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.lg,
                                            // fontWeight: theme.fontWeight.semibold,
                                            color: theme.palette.primary.main,
                                        })}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.sm,
                                            fontWeight: theme.fontWeight.light,
                                            color: theme.palette.common.black,
                                        })}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Stack>
                            </Box>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Vision;
