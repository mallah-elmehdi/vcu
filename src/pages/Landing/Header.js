import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slide1 from '../../assets/landing/slide-1.jpg';
import Slide2 from '../../assets/landing/slide-2.jpg';
import Slide3 from '../../assets/landing/slide-3.jpg';
import Slide5 from '../../assets/landing/slide-5.jpg';
import Slide6 from '../../assets/landing/slide-6.jpg';
import { Button, Link, Navbar } from '../../components';
import { PAGES } from '../../constants/pages';
import { NAVBAR_PAGES } from '../../constants/navbar';
import { VALUES } from '../../constants/landing';

const images = [Slide1, Slide2, Slide3, Slide5, Slide6];

const Header = () => {
    return (
        <Box position="relative" width="100%">
            <Slider
                {...{
                    fade: true,
                    infinite: true,
                    speed: 5500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    lazyLoad: 'progressive',
                    autoplay: true,
                    autoplaySpeed: 5500,
                    arrows: false,
                }}
            >
                {images.map((image, index) => (
                    <>
                        <Box
                            key={index}
                            sx={{
                                height: { md: 550, xs: 850 },
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className={index % 2 ? 'zoom-in' : 'zoom-out'}
                        />
                    </>
                ))}
            </Slider>
            <Box position="absolute" width="100%" top={0} right={0} zIndex={100}>
                <Navbar />
            </Box>
            <Box
                position="absolute"
                width="100%"
                height="100%"
                top="50%"
                right="50%"
                sx={(theme) => ({
                    transform: 'translate(50%, -50%)',
                    background: theme.gradient.primary,
                    opacity: 0.7,
                })}
            />
            <Box position="absolute" width="100%" top="50%" right="50%" zIndex={10} sx={{ transform: 'translate(50%, -50%)' }}>
                <Container maxWidth="md" sx={{ flexGrow: 1 }}>
                    <Typography
                        sx={(theme) => ({
                            fontWeight: theme.fontWeight.light,
                            fontSize: theme.fontSize.lg,
                            color: theme.palette.common.white,
                            textAlign: 'center',
                            mb: 3,
                        })}
                    >
                        Social innovation Lab - Value Chain Upgrade
                    </Typography>
                    <Typography
                        sx={(theme) => ({
                            fontWeight: theme.fontWeight.bold,
                            fontSize: theme.fontSize['4xl'],
                            color: theme.palette.common.white,
                            textAlign: 'center',
                            mb: 5,
                        })}
                    >
                        Semez l'avenir, Tissez le progrès, Élevez les vies : Notre Engagement Durable.
                    </Typography>
                </Container>
                <Container>
                    <Grid container spacing={3}>
                        {VALUES.map((item) => (
                            <Grid item md={3} sm={6} xs={12}>
                                <Link to={PAGES.landing.url + '#' + NAVBAR_PAGES[2].id}>
                                    <Button variant="outlined" color="muted" sx={{ width: '100%' }}>
                                        {item.title}
                                    </Button>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Header;
