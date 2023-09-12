import { AppBar, Box, Container, Toolbar, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useScrollPosition } from '../../hooks';

const Navbar = () => {
    const md = useMediaQuery((theme) => theme.breakpoints.up('md'));

    // const scrollDirection = useScrollDirection();
    const scrollPosition = useScrollPosition();
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        setSticky(scrollPosition >= 50);
    }, [scrollPosition]);

    return (
        <AppBar
            position="fixed"
            sx={(theme) => ({
                backgroundColor: sticky ? theme.palette.common.white : 'transparent',
                boxShadow: sticky ? theme.shadows.default : 'none',
                transition: 'all .3s ease',
                // position: '-webkit-sticky',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'top',
                // top: sticky ? 0 : '-8rem',
            })}
        >
            <Container>
                <Toolbar sx={{ py: 3 }}>{md ? <Desktop sticky={sticky} /> : <Mobile sticky={sticky} />}</Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
