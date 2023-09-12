import MuiList from '@mui/material/List';
import { styled } from '@mui/material';

const StyledList = styled(MuiList)(({ theme }) => ({
    width: '100%',
    gap: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    '& .MuiListItemButton-root': {
        borderTopLeftRadius: theme.borderRadius.xl,
        borderBottomLeftRadius: theme.borderRadius.xl,
        position: 'relative',
        backgroundColor: theme.palette.common.greyLight,
        color: theme.palette.common.grey,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            '& .MuiListItemIcon-root': {
                color: theme.palette.common.white,
            },
        },
    },
    '& .Mui-selected': {
        backgroundColor: theme.palette.primary.main  + " !important",
        color: theme.palette.common.white,
        '& .MuiListItemIcon-root': {
            color: theme.palette.common.white,
        },
    },

    '& .MuiListItemText-root': {
        fontSize: theme.fontSize.xl,
        fontWeight: theme.fontWeight.semibold,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
        fontSize: theme.fontSize['xl'],
        color: theme.palette.common.grey,
    },
}));

export default StyledList;
