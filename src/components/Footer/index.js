import { AppBar, Box, Container, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, Logo } from '..';
import { SOCIAL } from '../../constants/footer';

const Footer = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.common.grey,
                py: 1,
                width: '100%',
            })}
        >
            <Container>
                <AppBar
                    position="static"
                    sx={(theme) => ({
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                    })}
                >
                    <Container>
                        <Toolbar spacing={5} sx={{ py: 3 }}>
                            <Box width="fit-content">
                                <Logo square white />
                            </Box>
                            <Box display="flex" gap={1} alignItems="center" ml="auto">
                                {SOCIAL.map((item, index) => {
                                    return (
                                        <Link key={index} to={item.url} target="_blank">
                                            <IconButton
                                                sx={(theme) => ({
                                                    color: theme.palette.common.white,
                                                })}
                                            >
                                                {item.icon}
                                            </IconButton>
                                        </Link>
                                    );
                                })}
                            </Box>
                        </Toolbar>
                        <Divider sx={(theme) => ({ width: '100%', borderColor: theme.palette.secondary.main })} />
                        <Toolbar sx={{ pt: 3, flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography
                                sx={(theme) => ({
                                    color: theme.palette.common.white,
                                    fontWeight: theme.fontWeight.light,
                                    fontSize: theme.fontSize.xs,
                                })}
                            >
                                Use of this site constitutes acceptance of our User Agreement and Privacy Policy.
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Container>
        </Box>
    );
};

export default Footer;
