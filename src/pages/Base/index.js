import { Box } from '@mui/material';
import React, { useEffect, useReducer, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PAGES } from '../../constants/pages';
import { resetGeneralStates } from '../../context/actions';
import { initialData, reducer } from '../../context/reducer';
import { useScrollToTop } from '../../hooks';
import usePageTitle from '../../hooks/usePageTitle';

const Base = () => {
    // ========== VARIABLES
    const location = useLocation();

    // ========== GET TO THE TOP TO THE PAGE
    useScrollToTop();

    // ========= PAGE TITLE
    const [title, seTitle] = useState(PAGES.notFound.title);
    useEffect(() => {
        for (const key in PAGES) {
            if (Object.hasOwnProperty.call(PAGES, key)) {
                const element = PAGES[key];
                const list = location.pathname.split('/');
                if (list[list.length - 1] + '/' === element.url) {
                    seTitle(PAGES[key].title);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    usePageTitle(title);

    // ========== UTILES
    const getLocalData = () => {
        const statesDataJSON = localStorage.getItem('states');
        return statesDataJSON ? JSON.parse(statesDataJSON) : initialData;
    };

    // ========== states
    const [states, dispatch] = useReducer(reducer, getLocalData());

    // ========== set localstorage
    useEffect(() => {
        localStorage.setItem('states', JSON.stringify(states));
    }, [states]);

    // ========== clear storage
    useEffect(() => {
        return () => {
            dispatch(resetGeneralStates());
        };
    }, []);

    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.common.white,
                minHeight: '100vh',
                minWidth: '100vw',
                height: '100%',
                width: '100%',
            })}
        >
            {/* {states.loader && (
                    <Box
                        position="fixed"
                        sx={(theme) => ({ zIndex: theme.zIndex.modal + 2, backgroundColor: alpha(theme.palette.common.black, 0.25) })}
                        width="100vw"
                        height="100vh"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Loader />
                    </Box>
                )} */}
            {/* {states.alert && (
                <Snackbar open={true} autoHideDuration={2000} onClose={() => dispatch(removeAlert())}>
                    <Alert
                        onClose={() => dispatch(removeAlert())}
                        variant="filled"
                        severity={states.alert.severity}
                        sx={(theme) => ({
                            borderRadius: theme.borderRadius.xl,
                            fontSize: theme.fontSize.sm,
                            width: '100%',
                            alignItems: 'center',
                            maxWidth: '30rem',
                            boxShadow: `${alpha(theme.palette[states.alert.severity]?.main, 0.25)} 0 0 0 2px`,
                        })}
                    >
                        {states.alert.message && states.alert.message.length !== 0 ? states.alert.message : 'Error has been occurred'}
                    </Alert>
                </Snackbar>
            )} */}
            <Outlet context={{ states, dispatch }} />
        </Box>
    );
};

export default Base;
