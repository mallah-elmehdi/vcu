import { Box, Typography } from '@mui/material';
import React from 'react';

const TitledCard = ({ title, withPadding, children, badge }) => {
    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.common.white,
                borderRadius: theme.borderRadius.xl,
                boxShadow: theme.shadows.default,
            })}
        >
            <Box
                sx={(theme) => ({
                    p: 3,
                    borderBottom: '1px solid',
                    borderColor: theme.palette.darkMuted.main,
                })}
            >
                <Box display="flex" gap={3} alignItems="center" justifyContent="space-between">
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize.md,
                            fontWeight: theme.fontWeight.semibold,
                            color: theme.palette.common.black,
                        })}
                    >
                        {title}
                    </Typography>
                    {badge && <>{badge}</>}
                </Box>
            </Box>
            <Box p={withPadding ? 3 : 0}>{children}</Box>
        </Box>
    );
};

export default TitledCard;
