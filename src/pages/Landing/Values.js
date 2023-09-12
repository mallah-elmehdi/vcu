import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { Card, Title } from '../../components';
import { VALUES } from '../../constants/landing';

const Values = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.muted.main,
                py: 10,
                mb: 30,
            })}
        >
            <Container>
                <Title>Nos Chaînes de Valeur</Title>
                <Grid container spacing={3}>
                    {VALUES.map((item) => (
                        <Grid item md={3} sm={6} xs={12}>
                            <motion.div whileHover={{ scale: 1.05 }} style={{ height: '100%' }}>
                                <Card
                                    sx={(theme) => ({
                                        py: 5,
                                        height: '100%',
                                        // borderBottom: '5px solid',
                                        // borderColor: theme.palette.secondary.main,
                                        cursor: 'pointer',
                                    })}
                                >
                                    <Stack alignItems="center" spacing={3}>
                                        <Avatar
                                            src={item.image}
                                            sx={(theme) => ({
                                                width: 150,
                                                height: 150,
                                                alignSelf: 'flex-start',
                                                borderRight: '5px solid',
                                                borderBottom: '5px solid',
                                                borderColor: theme.palette.secondary.main,
                                                // p: 2,
                                            })}
                                        />
                                        <Typography
                                            sx={(theme) => ({
                                                fontWeight: theme.fontWeight.bold,
                                                fontSize: theme.fontSize.lg,
                                                color: theme.palette.common.black,
                                                alignSelf: 'flex-start',
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
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Values;
