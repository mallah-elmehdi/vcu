import { Box, LinearProgress, Typography, linearProgressClasses, styled } from '@mui/material';

const StyledProgress = styled((props) => (
    <Box position="relative">
        <LinearProgress variant="determinate" {...props} />
        <Typography
            sx={(theme) => ({
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                fontSize: theme.fontSize.sm,
                fontWeight: theme.fontWeight.extrabold,
                color: props.color === 'success' ? theme.palette.common.white : theme.palette.common.black,
            })}
        >
            {props.value}%
        </Typography>
    </Box>
))(({ theme }) => ({
    height: 14,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
    },
}));

export default StyledProgress;
