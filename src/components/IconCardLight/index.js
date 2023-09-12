import { Box, alpha } from '@mui/material';
import React from 'react';

const IconCard = ({ icon }) => {
    return (
        <Box
            sx={(theme) => ({
                borderRadius: theme.borderRadius.xl,
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                padding: theme.spacing(2),
                lineHeight: 0,
                color: theme.palette.primary.main,
                transform: 'rotate(10deg)',
                fontSize: theme.fontSize['2xl'],
            })}
        >
            <Box sx={{ transform: 'rotate(-10deg)' }}>{icon}</Box>
        </Box>
    );
};

export default IconCard;
