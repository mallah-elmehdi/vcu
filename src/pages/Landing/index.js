import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import AboutUs from './AboutUs';
import Aspects from './Aspects';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Methodologie from './Methodologie';
import SILVCUUnit from './SILVCUUnit';
import Values from './Values';
import Vision from './Vision';
import { useLocation } from 'react-router-dom';

const Landing = () => {
    const { hash } = useLocation();

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        // else scroll to id
        else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 150,
                        left: 0,
                        behavior: 'smooth',
                    });
                }
            }, 0);
        }
    }, [hash]);
    return (
        <Stack spacing={10}>
            <Header />
            <AboutUs />
            <SILVCUUnit />
            <Vision />
            <Values />
            <HowItWorks />
            <Methodologie />
            <Aspects />
        </Stack>
    );
};

export default Landing;
