import { Avatar, Box, IconButton } from '@mui/material';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ButtonLink, Link, Logo } from '../..';
import FR_FLAG from '../../../assets/utils/fr.png';
import { NAVBAR_PAGES_EN } from '../../../constants/navbar';
import { PAGES } from '../../../constants/pages';
import { setLangFR } from '../../../context/actions';

const Desktop = ({ sticky }) => {
    const { dispatch } = useOutletContext();
    return (
        <>
            <Logo square white={!sticky} />
            <Box sx={{ display: 'flex', gap: 3, ml: 'auto', alignItems: 'center' }}>
                {NAVBAR_PAGES_EN.map((page, index) => (
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
                <IconButton onClick={() => dispatch(setLangFR())}>
                    <Avatar sx={{ width: 25, height: 25 }} src={FR_FLAG} />
                </IconButton>
            </Box>
        </>
    );
};

export default Desktop;
