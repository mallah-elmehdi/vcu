import MuiTableCell, { tableCellClasses } from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

export const TableCell = styled(MuiTableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.darkMuted.main,
        color: theme.palette.common.dark,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const TableRow = styled(MuiTableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
