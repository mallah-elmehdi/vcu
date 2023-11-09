import { Avatar, Box, IconButton } from '@mui/material';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Link, Logo } from '../..';
import EN_FLAG from '../../../assets/utils/en.png';
import { NAVBAR_PAGES_FR } from '../../../constants/navbar';
import { PAGES } from '../../../constants/pages';
import { setLangEN } from '../../../context/actions';

const Desktop = ({ sticky }) => {
    const { dispatch } = useOutletContext();
    return (
        <>
            <Logo square white={!sticky} />
            <Box sx={{ display: 'flex', gap: 3, ml: 'auto', alignItems: 'center' }}>
                {NAVBAR_PAGES_FR.map((page, index) => (
                    <Link to={PAGES.landing.url + '#' + page.id}>
                        <Box
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.medium,
                                fontSize: theme.fontSize.sm,
                                fontFamily: theme.typography.fontFamily,
                                color: sticky ? theme.palette.primary.main : theme.palette.common.white,
                            })}
                        >
                            {page.title}
                        </Box>
                    </Link>
                ))}
                <IconButton onClick={() => dispatch(setLangEN())}>
                    <Avatar sx={{ width: 25, height: 25 }} src={EN_FLAG} />
                </IconButton>
            </Box>
        </>
    );
};

export default Desktop;
