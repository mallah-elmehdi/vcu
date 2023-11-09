import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Bg from '../../../assets/background/garden.png';
import Image from '../../../assets/landing/aspectsFR.png';
import { Footer, Img, Title } from '../../../components';
import MoroccoMap from './MoroccoMap';

const Aspects = () => {
    return (
        <Box>
            <Box
                sx={(theme) => ({
                    backgroundColor: theme.palette.muted.main,
                })}
            >
                <Box
                    sx={(theme) => ({
                        backgroundImage: `url(${Bg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',

                        py: 10,
                    })}
                >
                    <Container>
                        <Title withPadding zigzag>
                            Aspects clés pour l'analyse d'une chaine de valeur
                        </Title>
                        <Grid container justifyContent="center" mt={{ md: 20 }} sx={{ transform: { md: 'scale(1)', xs: 'scale(0.75)' } }}>
                            <Grid item md={10} xs={12}>
                                <Img
                                    src={Image}
                                    sx={(theme) => ({
                                        ...theme.shadows.png,
                                    })}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>

            <MoroccoMap />
            <Footer />
        </Box>
    );
};

export default Aspects;
