import { Box, Container, Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Title } from '../../../components';
import Bg from '../../../assets/landing/unit.jpg';

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
                    <Title white>VCU-SIL Unit</Title>
                    <Grid container spacing={8}>
                        <Grid item md={5.5} xs={12}>
                            <Typography
                                sx={(theme) => ({
                                    fontWeight: theme.fontWeight.bold,
                                    fontSize: theme.fontSize['xl'],
                                    color: theme.palette.common.white,
                                    mb: 3,
                                })}
                            >
                                About the Unit
                            </Typography>
                            <Typography
                                sx={(theme) => ({
                                    fontSize: theme.fontSize.xl,
                                    fontWeight: theme.fontWeight.light,
                                    color: theme.palette.common.white,
                                    textAlign: 'justify',
                                })}
                            >
                                The Social Innovation Lab's Value Chain Upgrade Unit is an innovative initiative that is committed to
                                catalyzing the socio-economic transformation of communities in Morocco and Africa by focusing on four
                                priority value chains: agriculture, handicrafts, sustainable tourism, and textiles. These chains have been
                                carefully selected because of their significant importance to the social fabric, the natural, cultural, and
                                professional potential they represent, as well as the pressing social need to improve the socio-economic
                                conditions of the actors who compose them.
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
                            <Typography
                                sx={(theme) => ({
                                    fontWeight: theme.fontWeight.bold,
                                    fontSize: theme.fontSize['xl'],
                                    color: theme.palette.common.white,
                                    mb: 3,
                                })}
                            >
                                Collaborative approach
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
                                We believe in a collaborative approach that actively involves local stakeholders, including farmers,
                                artisans, tourism professionals and textile stakeholders. We work hand-in-hand with these communities to
                                understand their needs, challenges and aspirations, and we design our programs accordingly.
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
                                VCU - SIL, is committed to creating a positive and sustainable impact in these vital sectors, contributing
                                to economic prosperity while preserving natural and cultural resources. Our ultimate goal is to build
                                stronger, more resilient and more united communities, while promoting sustainable and inclusive development
                                in Morocco, Africa and beyond.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default SILVCUUnit;
