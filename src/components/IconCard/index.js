import { Box } from '@mui/material';
import React from 'react';

const IconCard = ({ icon }) => {
    return (
        <Box
            sx={(theme) => ({
                borderRadius: theme.borderRadius.xl,
                backgroundColor: theme.palette.secondary.main,
                padding: theme.spacing(2),
                lineHeight: 0,
                color: 'white',
                transform: 'rotate(10deg)',
                fontSize: theme.fontSize.md,
            })}
        >
            <Box sx={{ transform: 'rotate(-10deg)' }}>{icon}</Box>
        </Box>
    );
};

export default IconCard;
