import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from '../../assets/landing/howItWorks.png';
import { Img, Title } from '../../components';

const HowItWorks = () => {
    return (
        <Container sx={{ alignSelf: 'center' }}>
            <Title zigzag withPadding>
                Comment ça marche?
            </Title>

            <Grid container spacing={10} alignItems="center">
                <Grid item md={6} xs={12}>
                    <Typography
                        sx={(theme) => ({
                            fontWeight: theme.fontWeight.light,
                            fontSize: theme.fontSize['4xl'],
                            color: theme.palette.common.black,
                        })}
                    >
                        Création de Synergie dans la Chaîne de Valeur pour un Développement Équitable et Durable
                    </Typography>
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
    );
};

export default HowItWorks;
