import { Avatar, Box, Container, Divider, Grid, Grow, Stack, Tab, Tabs, Typography, styled } from '@mui/material';
import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import Morocco from '../../assets/landing/morocco.png';
import Senegal from '../../assets/landing/senegal.png';
import CoteDIvoire from '../../assets/landing/cote_d_ivoire.png';
import CapeVerde from '../../assets/landing/cape_verde.png';
import Malawi from '../../assets/landing/malawi.png';
import { Img, Title } from '../../components';
import {
    MARKERS_CAPE_VERDE,
    MARKERS_COTE_D_IVOIRE,
    MARKERS_MALAWI,
    MARKERS_MOROCCO,
    MARKERS_SENEGAL,
    TABS_COUNTRIES,
} from '../../constants/landing';

const Marker = ({ top, right, text, line, desc, correction, reverse }) => {
    return (
        <Box
            sx={(theme) => ({
                top,
                right,
                transform: 'translate(50%, -50%)',
                position: 'absolute',
            })}
        >
            <Box display="flex" alignItems="center">
                <Stack
                    sx={
                        reverse
                            ? {
                                  left: '90%',
                                  position: 'absolute',
                              }
                            : {
                                  right: '90%',
                                  position: 'absolute',
                              }
                    }
                >
                    <Stack
                        sx={
                            reverse
                                ? {
                                      position: 'absolute',
                                      top: correction,
                                      right: 0,
                                  }
                                : {
                                      position: 'absolute',
                                      top: correction,
                                      left: 0,
                                  }
                        }
                    >
                        <Typography
                            sx={(theme) => ({
                                fontSize: theme.fontSize.lg,
                                fontWeight: theme.fontWeight.bold,
                                color: theme.palette.primary.main,
                                mb: 0.2,
                            })}
                        >
                            {text}
                        </Typography>
                        {desc.map((item) => (
                            <Box display="flex" alignItems="center" gap={0.5}>
                                <Avatar
                                    sx={(theme) => ({
                                        backgroundColor: 'transparent',
                                        width: 5,
                                        height: 5,
                                        color: theme.palette.secondary.main,
                                    })}
                                >
                                    <BsFillCircleFill />
                                </Avatar>
                                <Stack>
                                    <Typography
                                        sx={(theme) => ({
                                            fontSize: theme.fontSize.xs,
                                            fontWeight: theme.fontWeight.light,
                                            color: theme.palette.common.black,
                                        })}
                                    >
                                        {item}
                                    </Typography>
                                </Stack>
                            </Box>
                        ))}
                    </Stack>
                    <Divider
                        sx={(theme) => ({
                            width: line ? line : 150,
                            border: '1px solid',
                            borderColor: theme.palette.secondary.main,
                        })}
                    />
                </Stack>
                <Box
                    sx={(theme) => ({
                        backgroundColor: theme.palette.secondary.main,
                        borderRadius: theme.borderRadius.full,
                        p: 1,
                    })}
                />
            </Box>
        </Box>
    );
};

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.common.black,
    '&.Mui-selected': {
        color: theme.palette.primary.main,
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Animate = ({ children, checked }) => {
    return (
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <div>{children}</div>
        </Grow>
    );
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const MoroccoMap = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
        // sx={(theme) => ({
        //     backgroundColor: theme.palette.muted.main,
        //     py: 10,
        // })}
        >
            <Container sx={{ alignSelf: 'center' }}>
                <Title>VCU SIL à Aujourd'hui</Title>

                <Box sx={{ width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered sx={{ mb: 5 }}>
                        {TABS_COUNTRIES.map((item, index) => (
                            <StyledTab iconPosition="start" icon={<BsFillCircleFill />} label={item} {...a11yProps(index)} />
                        ))}
                    </Tabs>
                    <Animate checked={value === 0}>
                        <CustomTabPanel value={value} index={0}>
                            <Grid container justifyContent="center" sx={{ transform: { md: 'scale(1)', xs: 'scale(0.5)' } }}>
                                <Grid item md={4} xs={10} position="relative">
                                    <Img src={Morocco} />
                                    {MARKERS_MOROCCO.map((item) => (
                                        <Marker {...item} />
                                    ))}
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                    </Animate>

                    <Animate checked={value === 1}>
                        <CustomTabPanel value={value} index={1}>
                            <Grid container justifyContent="center" sx={{ transform: { md: 'scale(1)', xs: 'scale(0.5)' } }}>
                                <Grid item md={4} xs={10} position="relative">
                                    <Img src={Senegal} />
                                    {MARKERS_SENEGAL.map((item) => (
                                        <Marker {...item} />
                                    ))}
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                    </Animate>

                    <Animate checked={value === 2}>
                        <CustomTabPanel value={value} index={2}>
                            <Grid container justifyContent="center" sx={{ transform: { md: 'scale(1)', xs: 'scale(0.5)' } }}>
                                <Grid item md={4} xs={10} position="relative">
                                    <Img src={CoteDIvoire} />
                                    {MARKERS_COTE_D_IVOIRE.map((item) => (
                                        <Marker {...item} />
                                    ))}
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                    </Animate>

                    <Animate checked={value === 3}>
                        <CustomTabPanel value={value} index={3}>
                            <Grid container justifyContent="center" sx={{ transform: { md: 'scale(1)', xs: 'scale(0.5)' } }}>
                                <Grid item md={4} xs={10} position="relative">
                                    <Img src={CapeVerde} />
                                    {MARKERS_CAPE_VERDE.map((item) => (
                                        <Marker {...item} />
                                    ))}
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                    </Animate>

                    <Animate checked={value === 4}>
                        <CustomTabPanel value={value} index={4}>
                            <Grid container justifyContent="center" sx={{ transform: { md: 'scale(1)', xs: 'scale(0.5)' } }}>
                                <Grid item md={2} xs={10} position="relative">
                                    <Img src={Malawi} />
                                    {MARKERS_MALAWI.map((item) => (
                                        <Marker {...item} />
                                    ))}
                                </Grid>
                            </Grid>
                        </CustomTabPanel>
                    </Animate>
                </Box>
            </Container>
        </Box>
    );
};

export default MoroccoMap;
