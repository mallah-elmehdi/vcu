import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Line from '../Line';
import Img from '../Img';
// import Zigzag from '../../assets/utils/zigzag.png';
import Zigzag from '../../assets/utils/leaf-line.png';

const Title = ({ children, white, zigzag, withPadding, smallLine }) => {
    return (
        <>
            {zigzag ? (
                <Box position="relative" width="fit-content" mb={withPadding ? 5 : 0}>
                    <Typography
                        sx={(theme) => ({
                            fontWeight: theme.fontWeight.bold,
                            fontSize: theme.fontSize['xl'],
                            color: white ? theme.palette.common.white : theme.palette.primary.main,
                            zIndex: 20,
                            mb: smallLine ? 1 : 0,
                        })}
                    >
                        {children}
                    </Typography>
                    {smallLine ? (
                        <Line smallLine={smallLine} white={white} />
                    ) : (
                        <Img
                            sx={{
                                position: 'absolute',
                                // top: 35,
                                top: -33,
                                left: -20,
                                width: 35,
                                zIndex: 0,
                            }}
                            src={Zigzag}
                        />
                    )}
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
                    <Line smallLine={smallLine} white={white} />
                </Stack>
            )}
        </>
    );
};

export default Title;
