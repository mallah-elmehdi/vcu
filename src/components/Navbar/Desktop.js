import { Box } from '@mui/material';
import React from 'react';
import { ButtonLink, Link, Logo } from '..';

// import { NAVBAR_PAGES } from '../../constants/navbar';
import { NAVBAR_PAGES } from '../../constants/navbar';
import { PAGES } from '../../constants/pages';

const Desktop = ({ sticky }) => {
    return (
        <>
            <Logo square white={!sticky} />
            <Box sx={{ display: 'flex', gap: 3, ml: 'auto' }}>
                {NAVBAR_PAGES.map((page, index) => (
                    <Link to={PAGES.landing.url + '#' + page.id}>
                        <ButtonLink
                            sx={(theme) => ({
                                color: sticky ? theme.palette.primary.main : theme.palette.common.white,
                            })}
                        >
                            {page.title}
                        </ButtonLink>
                    </Link>
                ))}
            </Box>
        </>
    );
};

export default Desktop;
