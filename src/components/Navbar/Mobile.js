import { Box, IconButton, Stack, alpha } from '@mui/material';
import React from 'react';
import { ButtonLink, Dialog, Link, Logo } from '../../components';

// import { NAVBAR_PAGES } from '../../constants/navbar';
import { BsList, BsX } from 'react-icons/bs';
import { NAVBAR_PAGES } from '../../constants/navbar';

// ========== MENU TRANSITION

const Mobile = ({ sticky }) => {
    // ========== DIALOG OPEN/CLOSE
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Logo white={!sticky} square />
            <Box ml="auto" gap={3} display="flex" alignItems="center" justifyContent="center">
                <IconButton
                    sx={(theme) => ({ color: sticky ? theme.palette.primary.main : theme.palette.common.white })}
                    onClick={handleClickOpen}
                >
                    <BsList />
                </IconButton>
            </Box>
            <Dialog sx={{ '.MuiDialog-paper': { borderRadius: 0 } }} open={open} onClose={handleClose} fullScreen>
                <Box
                    sx={(theme) => ({
                        // backgroundImage: `url(${Bg})`,
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                        backgroundColor: alpha(theme.palette.muted.main, 0.25),
                        height: '100%',
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                    })}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={(theme) => ({
                            borderBottom: `1px solid ${theme.palette.muted.main}`,
                            pb: 3,
                        })}
                    >
                        <Logo square />
                        <IconButton color="primary" onClick={handleClose} sx={{ ml: 'auto' }}>
                            <BsX />
                        </IconButton>
                    </Stack>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            gap: 3,
                            flexDirection: 'column',
                        }}
                    >
                        {NAVBAR_PAGES.map((page, index) => (
                            <Link key={index} to={page.url}>
                                <ButtonLink
                                    sx={(theme) => ({
                                        fontSize: theme.fontSize.lg,
                                        color: theme.palette.common.black,
                                    })}
                                >
                                    {page.title}
                                </ButtonLink>
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};

export default Mobile;
