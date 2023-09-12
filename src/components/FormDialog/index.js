import { Box, DialogActions, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import React from 'react';
import { Dialog } from '..';
import { XMark } from '../../icons';

const FormDialog = ({ title, onClose, open, children, action, onSubmit }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle
                sx={(theme) => ({
                    backgroundColor: theme.palette.darkMuted.main,
                })}
            >
                <Box display="flex" justifyContent="space-between" gap={3}>
                    {title}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={onClose}
                        sx={(theme) => ({ color: theme.palette.quaternary.main })}
                    >
                        <XMark />
                    </IconButton>
                </Box>
            </DialogTitle>
            <form onSubmit={onSubmit}>
                <DialogContent sx={{ '&.MuiDialogContent-root': { p: 3 } }}>
                    <Stack spacing={3} alignItems="center">
                        {children}
                    </Stack>
                </DialogContent>
                <DialogActions
                    sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTop: '0.75px solid',
                        borderColor: theme.palette.darkMuted.main,
                        '&.MuiDialogActions-root': { p: theme.spacing(3) },
                    })}
                >
                    {action}
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default FormDialog;
