import { Avatar, Box, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from '../../../assets/landing/vision.jpg';
import Leaf from '../../../assets/utils/leaf.png';
import { Img, Title } from '../../../components';
import { VISION_FR } from '../../../constants/landing';
import { NAVBAR_PAGES_FR } from '../../../constants/navbar';

const Vision = () => {
    return (
        <Container id={NAVBAR_PAGES_FR[1].id} sx={{ alignSelf: 'center' }}>
            <Title>Notre Vision</Title>
            <Grid container spacing={8} alignItems="center">
                <Grid item md={6} xs={12} alignItems="center">
                    <Stack spacing={3} sx={{ width: 'fit-content', mx: { md: 'auto' } }}>
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
                                    ...theme.shadows.png,
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
                    </Stack>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.md,
                            fontWeight: theme.fontWeight.light,
                            color: theme.palette.common.black,
                            lineHeight: 2,
                            textAlign: 'justify',
                            mt: 3,
                        })}
                    >
                        Notre vision est celle d'une unité de développement de chaînes de valeur qui agit comme un catalyseur de
                        transformation positive. Nous travaillons avec passion pour créer un écosystème où les agriculteurs, artisans et
                        professionnels prospèrent, où les communautés s'épanouissent, et où l'impact de nos efforts se fait ressentir à
                        travers une amélioration tangible des conditions de vie. Notre engagement envers une synergie efficace au sein des
                        chaînes de valeur est le socle sur lequel repose notre quête d'un avenir plus prospère et durable pour tous. Notre
                        vision s'articule autour de plusieurs principes fondamentaux :
                    </Typography>
                </Grid>

                <Grid item md={6} xs={12}>
                    {/* <Grid container spacing={3}> */}
                    <Stack spacing={4}>
                        {VISION_FR.map((item) => (
                            <Box display="flex" alignItems="center" gap={3}>
                                <Avatar
                                    sx={(theme) => ({
                                        backgroundColor: 'transparent',
                                        width: 60,
                                        height: 60,
                                        color: theme.palette.secondary.main,
                                        fontSize: theme.fontSize['4xl'],
                                    })}
                                >
                                    {item.icon}
                                </Avatar>
                                <Stack spacing={1}>
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.lg,
                                            fontWeight: theme.fontWeight.semibold,
                                            // color: theme.palette.primary.main,
                                            color: theme.palette.common.black,
                                        })}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.sm,
                                            fontWeight: theme.fontWeight.light,
                                            color: theme.palette.grey[600],
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
