import { AppBar, Box, Container, Divider, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { ButtonLink, Link, Logo } from '..';
import { SOCIAL } from '../../constants/footer';
import { NAVBAR_PAGES } from '../../constants/navbar';

const Footer = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.primary.main,
                py: 12,
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
                        <Toolbar sx={{ py: 10, flexWrap: 'wrap', gap: 3 }}>
                            <Box width={{ md: 'fit-content', xs: '100%', mr: 3 }}>
                                <Logo square white />
                            </Box>
                            <Box
                                width={{ sm: 'fit-content', xs: '100%' }}
                                sx={{ mr: 'auto', flexGrow: 1, display: 'flex', gap: 2, flexDirection: { sm: 'row', xs: 'column' } }}
                            >
                                {NAVBAR_PAGES.map((page, index) => (
                                    <Link key={index} to={page.url}>
                                        <ButtonLink
                                            sx={(theme) => ({
                                                fontSize: theme.fontSize.sm,
                                                color: theme.palette.common.white,
                                            })}
                                        >
                                            {page.title}
                                        </ButtonLink>
                                    </Link>
                                ))}
                            </Box>
                            <Box display="flex" gap={1} alignItems="center">
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
                        <Toolbar sx={{ py: 3, flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography
                                sx={(theme) => ({
                                    color: theme.palette.common.white,
                                    fontWeight: theme.fontWeight.light,
                                    fontSize: theme.fontSize.xs,
                                })}
                            >
                                © 2023 Impact Academy LLC. All rights reserved.
                            </Typography>
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
