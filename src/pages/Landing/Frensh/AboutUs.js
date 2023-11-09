import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import 'swiper/css';
import Bg from '../../../assets/background/blob-1.png';
import Leaf from '../../../assets/utils/leaf.png';
import { Card, Img, Title } from '../../../components';
import { ABOUT_US_FR } from '../../../constants/landing';
import { NAVBAR_PAGES_FR } from '../../../constants/navbar';

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
            <Container id={NAVBAR_PAGES_FR[0].id} sx={{ alignSelf: 'center' }}>
                <Title>À propos de nous</Title>
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
                                Un espace d'innovation sociale, de recherche-action et de co-construction qui accompagne les populations,
                                les acteurs et les organisations privées ou publiques dans la réflexion et le développement de leurs projets
                                sociaux au niveau local, régional, national et africain.
                            </Typography>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.md,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.black,
                                    textAlign: 'justify',
                                })}
                            >
                                Notre dévouement se focalise sur la conception de solutions innovantes durables visant à appuyer le
                                développement socio-économique des communautés. Notre méthodologie de travail repose sur quatre étapes
                                distinctives.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item md={6}>
                        {/* <Swiper
                        modules={[EffectCards, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        effect="cards"
                        autoplay
                        loop
                        cardsEffect={{
                            slideShadows: false,
                        }}
                        style={{ overflow: 'visible' }}
                    > */}
                        <Grid container spacing={4}>
                            {ABOUT_US_FR.map((item, index) => (
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
