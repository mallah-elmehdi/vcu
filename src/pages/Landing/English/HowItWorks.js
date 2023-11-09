import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from '../../../assets/landing/howItWorksEN.png';
import { Img, Title } from '../../../components';
import Bg from '../../../assets/utils/leafs.png';
import { NAVBAR_PAGES_EN } from '../../../constants/navbar';

const HowItWorks = () => {
    return (
        <Box
            id={NAVBAR_PAGES_EN[3].id}
            sx={(theme) => ({
                position: 'relative',
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center left',
                backgroundSize: 'contain',
            })}
        >
            <Container sx={{ alignSelf: 'center' }}>
                <Title>How it works</Title>

                <Grid container spacing={10} alignItems="center">
                    <Grid item md={6} xs={12}>
                        <Stack spacing={1} alignItems="flex-start">
                            <Typography>
                                <Typography
                                    component="span"
                                    sx={(theme) => ({
                                        fontWeight: theme.fontWeight.bold,
                                        display: 'inline',
                                        fontSize: '2.125rem',
                                        color: theme.palette.common.white,
                                        backgroundColor: theme.palette.primary.main,
                                        lineHeight: 2,
                                        textAlign: 'justify',
                                    })}
                                >
                                    Creation of synergy in the value chain for a sustainable and equitable development
                                </Typography>
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Img
                            src={Image}
                            sx={(theme) => ({
                                width: '100%',
                            })}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HowItWorks;
