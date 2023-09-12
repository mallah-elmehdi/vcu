import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Button, Link } from '../../components';
import { PAGES } from '../../constants/pages';

const NotFound = () => {
    return (
        <Stack spacing={3} minHeight="100vh" justifyContent="center" alignItems="center" py={5}>
            <Container maxWidth="sm">
                <Stack spacing={3} alignItems="center">
                    <Typography
                        sx={(theme) => ({
                            lineHeight: 1,
                        })}
                    >
                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontSize: theme.fontSize['9xl'],
                                fontWeight: theme.fontWeight.extrabold,
                                color: theme.palette.primary.main,
                                lineHeight: 1,
                            })}
                        >
                            4
                        </Typography>
                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontSize: theme.fontSize['9xl'],
                                fontWeight: theme.fontWeight.extrabold,
                                color: theme.palette.secondary.main,
                                lineHeight: 1,
                            })}
                        >
                            0
                        </Typography>
                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontSize: theme.fontSize['9xl'],
                                fontWeight: theme.fontWeight.extrabold,
                                color: theme.palette.tertiary.main,
                                lineHeight: 1,
                            })}
                        >
                            4
                        </Typography>
                        <Typography
                            component="span"
                            sx={(theme) => ({
                                fontSize: theme.fontSize['9xl'],
                                fontWeight: theme.fontWeight.extrabold,
                                color: theme.palette.quaternary.main,
                                lineHeight: 1,
                            })}
                        >
                            .
                        </Typography>
                    </Typography>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize['2xl'],
                            fontWeight: theme.fontWeight.light,
                            color: theme.palette.common.black,
                        })}
                    >
                        Page introuvable
                    </Typography>
                    <Link to={PAGES.landing.url}>
                        <Button variant="outlined">Retour</Button>
                    </Link>
                </Stack>
            </Container>
        </Stack>
    );
};

export default NotFound;
