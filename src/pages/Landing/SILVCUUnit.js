import { Box, Container, Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Title } from '../../components';
import Bg from '../../assets/landing/unit.jpg';

const SILVCUUnit = () => {
    const md = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <Box
            sx={(theme) => ({
                position: 'relative',
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            })}
        >
            <Box
                sx={(theme) => ({
                    background: theme.gradient.primaryAlpha,
                    py: 10,
                })}
            >
                <Container>
                    <Grid container spacing={10}>
                        <Grid item md={5.5} xs={12}>
                            <Title white>SIL-VCU Unit</Title>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.xl,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.white,
                                    textAlign: 'justify',
                                })}
                            >
                                L'Unité de Développement de Chaînes de Valeur du Social Innovation Lab est une initiative innovante qui
                                s'engage à catalyser la transformation socio-économique de communautés au Maroc et en Afrique en se
                                concentrant sur quatre chaînes de valeur prioritaires : l'agriculture, l'artisanat, le tourisme durable et
                                le textile. Ces chaînes ont été soigneusement sélectionnées en raison de leur importance significative pour
                                le tissu social, du potentiel naturel, culturel et professionnel qu'elles représentent, ainsi que de la
                                nécessité sociale pressante d'améliorer les conditions socio-économiques des acteurs qui les composent.
                            </Typography>
                        </Grid>
                        <Grid item md={1} xs={12}>
                            <Divider
                                orientation={md ? 'vertical' : 'horizontal'}
                                sx={(theme) => ({
                                    borderColor: theme.palette.common.white,
                                })}
                            />
                        </Grid>

                        <Grid item md={5.5} xs={12}>
                            <Title white>Approche Collaborative </Title>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.xl,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.white,
                                    textAlign: 'justify',
                                    mb: 2,
                                })}
                            >
                                Nous croyons en une approche collaborative qui implique activement les parties prenantes locales, y compris
                                les agriculteurs, les artisans, les professionnels du tourisme et les acteurs du textile. Nous travaillons
                                main dans la main avec ces communautés pour comprendre leurs besoins, leurs défis et leurs aspirations, et
                                nous concevons nos programmes en conséquence.
                            </Typography>

                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.xl,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.white,
                                    textAlign: 'justify',
                                    mb: 2,
                                })}
                            >
                                VCU - SIL, s'engage à créer un impact positif et durable dans ces secteurs vitaux, en contribuant à la
                                prospérité économique tout en préservant les ressources naturelles et culturelles. Notre objectif ultime est
                                de bâtir des communautés plus fortes, plus résilientes et plus unies, tout en promouvant un développement
                                durable et inclusif au Maroc, en Afrique et au-delà.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default SILVCUUnit;
