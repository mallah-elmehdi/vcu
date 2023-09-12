import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { BsArrowDown } from 'react-icons/bs';

export const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: 0,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    borderRadius: theme.borderRadius.xl,
    '& .Mui-expanded': {
        backgroundColor: theme.palette.yellow.main,
        borderTopRightRadius: theme.borderRadius.xl,
        borderTopLeftRadius: theme.borderRadius.xl,
    },
    boxShadow: theme.shadows.default,
}));

export const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<BsArrowDown />} {...props} />)(({ theme }) => ({
    border: 0,

    // flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',

    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(3),
}));
