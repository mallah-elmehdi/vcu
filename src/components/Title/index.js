import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Line from '../Line';
import Img from '../Img';
import Zigzag from '../../assets/utils/zigzag.png';

const Title = ({ children, white, zigzag, withPadding }) => {
    return (
        <>
            {zigzag ? (
                <Box position="relative" width="fit-content" mb={withPadding ? 5 : 0}>
                    <Typography
                        sx={(theme) => ({
                            fontWeight: theme.fontWeight.bold,
                            fontSize: theme.fontSize['2xl'],
                            color: theme.palette.primary.main,
                            zIndex: 20,
                        })}
                    >
                        {children}
                    </Typography>
                    <Img
                        sx={{
                            position: 'absolute',
                            top: 35,
                            left: 0,
                            width: 35,
                            zIndex: 0,
                        }}
                        src={Zigzag}
                    />
                </Box>
            ) : (
                <Stack
                    sx={{
                        mb: 10,
                    }}
                    alignItems="center"
                >
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize['3xl'],
                            fontWeight: theme.fontWeight.bold,
                            color: white ? theme.palette.common.white : theme.palette.primary.main,
                            textAlign: 'center',
                            mb: 2,
                        })}
                    >
                        {children}
                    </Typography>
                    <Line white={white} />
                </Stack>
            )}
        </>
    );
};

export default Title;
