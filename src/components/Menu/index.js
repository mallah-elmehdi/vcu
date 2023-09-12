import { Menu, alpha, styled } from '@mui/material';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: theme.borderRadius.xl,
        marginTop: theme.spacing(1),
        color: theme.palette.common.black,
        boxShadow: theme.shadows.default,
        '& .MuiMenu-list': {
            padding: 0,
        },
        '& .MuiMenuItem-root': {
            padding: theme.spacing(1.5, 3),
            fontSize: theme.fontSize.sm,
            '&:active': {
                backgroundColor: alpha(theme.palette.darkMuted.main, 0.25),
            },
            '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.darkMuted.main, 0.25),
            },
        },
    },
}));

export default StyledMenu;
