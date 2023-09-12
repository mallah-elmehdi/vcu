import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Circle from '../../assets/landing/circle-paint.png';
import { Img, Title } from '../../components';
import { ASPECTS } from '../../constants/landing';

const Aspects = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.muted.main,
                py: 10,
            })}
        >
            <Container>
                <Title withPadding zigzag>
                    Aspects clés pour l'analyse d'une chaine de valeur
                </Title>
                <Grid container justifyContent="center" mt={{ md: 20 }} sx={{ transform: { md: 'scale(1)', xs: 'scale(0.75)' } }}>
                    <Grid item md={4} xs={10} position="relative">
                        <Img src={Circle} />

                        {ASPECTS.map((item, index) => (
                            <Box
                                sx={(theme) => ({
                                    width: 140,
                                    height: 140,
                                    position: 'absolute',
                                    borderRadius: theme.borderRadius.full,
                                    p: 2,
                                    backgroundColor: theme.palette.secondary.main,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    transform: 'translate(50%, -50%)',

                                    ...item.position,
                                })}
                            >
                                <Typography
                                    sx={(theme) => ({
                                        fontWeight: theme.fontWeight.bold,
                                        fontSize: theme.fontSize.md,
                                        color: theme.palette.common.white,
                                        textAlign: 'center',
                                        lineHeight: 1.25,
                                    })}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}

                        <Typography
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.bold,
                                fontSize: theme.fontSize['3xl'],
                                color: theme.palette.common.black,
                                textAlign: 'center',
                                top: '50%',
                                right: '50%',
                                transform: 'translate(50%, -50%)',
                                position: 'absolute',
                            })}
                        >
                            VCU agricoles
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Aspects;
