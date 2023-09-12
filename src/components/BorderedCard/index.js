import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(3),
    boxShadow: 'none',
    border: `1px solid ${theme.palette.darkMuted.main}`,
    borderRadius: theme.borderRadius.xl,
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
}));

export default StyledCard;
