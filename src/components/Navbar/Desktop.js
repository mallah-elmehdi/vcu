import { Box } from '@mui/material';
import React from 'react';
import { ButtonLink, Logo } from '..';

// import { NAVBAR_PAGES } from '../../constants/navbar';
import { NAVBAR_PAGES } from '../../constants/navbar';

const Desktop = ({ sticky }) => {
    return (
        <>
            <Logo square white={!sticky} />
            <Box sx={{ display: 'flex', gap: 3, ml: 'auto' }}>
                {NAVBAR_PAGES.map((page, index) => (
                    <ButtonLink
                        sx={(theme) => ({
                            color: sticky ? theme.palette.primary.main : theme.palette.common.white,
                        })}
                    >
                        {page.title}
                    </ButtonLink>
                ))}
            </Box>
        </>
    );
};

export default Desktop;
