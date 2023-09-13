import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from '../../assets/landing/howItWorks.png';
import { Img, Title } from '../../components';
// import Bg from '../../assets/utils/leafs-branch.png';
import Bg from '../../assets/utils/leafs.png';
// import Bg from '../../assets/utils/leafs2.png';
import { NAVBAR_PAGES } from '../../constants/navbar';

const HowItWorks = () => {
    return (
        <Box
            id={NAVBAR_PAGES[3].id}
            sx={(theme) => ({
                position: 'relative',
                backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center left',
                backgroundSize: 'contain',
            })}
        >
            <Container sx={{ alignSelf: 'center' }}>
                <Title>Comment ça marche?</Title>

                <Grid container spacing={10} alignItems="center">
                    <Grid item md={6} xs={12}>
                        <Stack spacing={1} alignItems="flex-start">
                            <Typography>
                                <Typography
                                    component="span"
                                    sx={(theme) => ({
                                        fontWeight: theme.fontWeight.bold,
                                        // fontWeight: theme.fontWeight.light,
                                        display: 'inline',
                                        fontSize: '2.125rem',
                                        // fontSize: theme.fontSize['4xl'],
                                        // color: theme.palette.primary.main,
                                        color: theme.palette.common.white,
                                        backgroundColor: theme.palette.primary.main,
                                        lineHeight: 2,
                                        textAlign: 'justify',
                                    })}
                                >
                                    Création de Synergie dans la Chaîne de Valeur pour un Développement Équitable et Durable
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
