import { Avatar } from '@mui/material';
import React from 'react';
// import Image from '../../assets/brand/logo-square.png';
import Image from '../../assets/brand/logo.png';
import ImageWhite from '../../assets/brand/logo-white.png';
import { Link } from '../../components';
import { PAGES } from '../../constants/pages';

const Logo = ({ square, white, lg }) => {
    return (
        <Link to={PAGES.landing.url}>
            <Avatar
                variant={square ? 'square' : 'circular'}
                src={white ? ImageWhite : Image}
                sx={(theme) => ({ width: '100%', height: lg ? 100 : 50 })}
            />
        </Link>
    );
};

export default Logo;
