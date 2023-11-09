import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Bg1 from '../../../assets/background/wave-1.png';
import Bg2 from '../../../assets/background/wave-2.png';
import { Card, Title } from '../../../components';
import { VALUES_EN } from '../../../constants/landing';
import { NAVBAR_PAGES_EN } from '../../../constants/navbar';

const Values = () => {
    const [hover, setHover] = useState(-1);
    const handleHoverOn = (index) => setHover(index);
    const handleHoverOff = () => setHover(-1);

    return (
        <Box
            sx={(theme) => ({
                backgroundImage: `url(${Bg2})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            })}
        >
            <Box
                sx={(theme) => ({
                    backgroundImage: `url(${Bg1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    py: 10,
                })}
            >
                <Container id={NAVBAR_PAGES_EN[2].id}>
                    <Title>Our value chains</Title>
                    <Grid container spacing={3}>
                        {VALUES_EN.map((item, index) => (
                            <Grid item md={3} sm={6} xs={12}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    onHoverStart={(e) => {
                                        handleHoverOn(index);
                                    }}
                                    onHoverEnd={(e) => {
                                        handleHoverOff();
                                    }}
                                    style={{ height: '100%' }}
                                >
                                    <Card
                                        sx={(theme) => ({
                                            py: 5,
                                            height: '100%',
                                            backgroundColor: hover === index ? theme.palette.secondary.main : theme.palette.common.white,
                                            // borderBottom: '5px solid',
                                            // borderColor: theme.palette.secondary.main,
                                            cursor: 'pointer',
                                            transition: 'all .3s ease',
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
                                                    borderColor:
                                                        hover === index ? theme.palette.primary.main : theme.palette.secondary.main,
                                                    transition: 'all .3s ease',
                                                    // p: 2,
                                                })}
                                            />
                                            <Typography
                                                sx={(theme) => ({
                                                    fontWeight: theme.fontWeight.bold,
                                                    fontSize: theme.fontSize.lg,
                                                    transition: 'all .3s ease',
                                                    color: hover === index ? theme.palette.common.white : theme.palette.common.black,
                                                    alignSelf: 'flex-start',
                                                })}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                sx={(theme) => ({
                                                    fontSize: theme.fontSize.sm,
                                                    fontWeight: theme.fontWeight.light,
                                                    transition: 'all .3s ease',
                                                    color: hover === index ? theme.palette.common.white : theme.palette.common.black,
                                                    textAlign: 'justify',
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
        </Box>
    );
};

export default Values;
