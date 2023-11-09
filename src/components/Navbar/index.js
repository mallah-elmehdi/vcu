import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { LANG } from '../../constants/landing';
import Frensh from './Frensh';
import English from './English';

const Navbar = () => {
    // ----- states
    const { states } = useOutletContext();
    const { lang } = states;

    return <>{lang === LANG.FR ? <Frensh /> : <English />}</>;
};

export default Navbar;
