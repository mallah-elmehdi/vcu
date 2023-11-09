import { AppBar, Container, Toolbar, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useScrollPosition } from '../../hooks';
import { ButtonLink } from '..';

const LanguageBar = () => {
    return (
        <AppBar
            position="sticky"
            sx={(theme) => ({
                backgroundColor: theme.palette.primary.main,
                boxShadow: 'none',
                transition: 'all .3s ease',
            })}
        >
            <Container>
                <Toolbar sx={{ py: 3 }}>
                    <ButtonLink
                        sx={(theme) => ({
                            color: theme.palette.common.black,
                        })}
                    >
                        Français
                    </ButtonLink>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default LanguageBar;
