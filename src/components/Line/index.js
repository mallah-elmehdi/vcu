import { Divider } from '@mui/material';
import React from 'react';

const Line = ({ white }) => {
    return (
        <Divider
            sx={(theme) => ({
                width: '100%',
                border: '3px solid',
                borderColor: white ? theme.palette.common.white : theme.palette.secondary.main,
                maxWidth: '15rem',
            })}
        />
    );
};

export default Line;
