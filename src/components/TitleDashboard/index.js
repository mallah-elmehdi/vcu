import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';

const TitleDashboard = ({ children, icon }) => {
    return (
        <Stack direction="row" mb={5} alignItems="center" spacing={1}>
            <Avatar
                sx={(theme) => ({
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.common.white,
                })}
            >
                {icon}
            </Avatar>
            <Typography
                sx={(theme) => ({
                    fontSize: theme.fontSize.xl,
                    fontWeight: theme.fontWeight.bold,
                    color: theme.palette.common.black,
                })}
            >
                {children}
            </Typography>
        </Stack>
    );
};

export default TitleDashboard;
