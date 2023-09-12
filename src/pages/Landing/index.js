import { Stack } from '@mui/material';
import React from 'react';
import AboutUs from './AboutUs';
import Aspects from './Aspects';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Methodologie from './Methodologie';
import SILVCUUnit from './SILVCUUnit';
import Values from './Values';
import Vision from './Vision';

const Landing = () => {
    return (
        <Stack spacing={20}>
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
