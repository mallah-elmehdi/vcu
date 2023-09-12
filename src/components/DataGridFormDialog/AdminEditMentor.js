import { Autocomplete, Chip, InputAdornment, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import { getAdminGroups, updateMentor } from '../../api/admin';
import { Button, FormDialog, Input } from '../../components';
import { actionFinished, actionInProgress, adminGroup, adminUpdateMentor, setAlert } from '../../context/actions';
import { MapPin, Squares2X2, User } from '../../icons';
import { isTheUsernameUnique } from '../../api/user';

const AdminEditGroup = ({ value }) => {
    // ======= Dialog
    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    // ========== Form
    const {
        formState: { errors },
        handleSubmit,
        control,
        setError,
        reset,
        setValue,
    } = useForm({
        defaultValues: {
            firstname: '',
            lastname: '',
            provinceId: '',
            username: '',
            groupIds: [],
        },
    });

    // ========== states
    const { states, dispatch } = useOutletContext();
    const { admin, provinces } = states;
    const { groups } = admin || {};

    // ========= get data
    const handleGetGroups = (provinceId) => {
        dispatch(actionInProgress());
        getAdminGroups({ provinceId })
            .then((data) => dispatch(adminGroup(data)))
            .catch((err) =>
                dispatch(
                    setAlert({
                        severity: 'error',
                        message: err,
                    })
                )
            )
            .finally(() => dispatch(actionFinished()));
    };

    // ========= submit
    const onSubmit = (data, event) => {
        event.preventDefault();

        isTheUsernameUnique({ username: data.username, userId: value?.user?.id }).then((isUnique) => {
            if (!isUnique) {
                setError('username', { message: "Le nom d'utilisateur est déjà utilisé" });
            } else {
                dispatch(actionInProgress());
                updateMentor({ ...data, mentorId: value.id, userId: value?.user?.id })
                    .then((mentor) => {
                        reset();
                        handleCloseDialog();
                        dispatch(adminUpdateMentor(mentor));
                        dispatch(
                            setAlert({
                                severity: 'success',
                                message: 'Mentor mis à jour avec succès',
                            })
                        );
                        reset();
                    })
                    .catch((err) =>
                        dispatch(
                            setAlert({
                                severity: 'error',
                                message: err,
                            })
                        )
                    )
                    .finally(() => dispatch(actionFinished()));
            }
        });
    };

    useEffect(() => {
        setValue('firstname', value?.firstname);
        setValue('lastname', value?.lastname);
        setValue('provinceId', value?.province?.id);
        setValue('username', value?.user?.username);
        setValue(
            'groupIds',
            value?.groups.map((item) => item.id)
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <>
            <Button
                onClick={handleOpenDialog}
                color="quaternary"
                sx={(theme) => ({
                    fontSize: theme.fontSize.xs,
                    padding: theme.spacing(1, 2),
                    color: theme.palette.common.black,
                })}
            >
                Modifier
            </Button>

            <FormDialog title="Modifier le groupe" open={openDialog} onClose={handleCloseDialog}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3} alignItems="center">
                        <Controller
                            control={control}
                            name="lastname"
                            rules={{
                                required: { value: true, message: 'Le nom est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.lastname ? true : false}
                                    {...field}
                                    helperText={errors.lastname ? errors.lastname.message : ''}
                                    type="text"
                                    label="Nom"
                                    placeholder="Entrez le nom"
                                    iconStart={<User />}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="firstname"
                            rules={{
                                required: { value: true, message: 'Le prénom est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.firstname ? true : false}
                                    {...field}
                                    helperText={errors.firstname ? errors.firstname.message : ''}
                                    type="text"
                                    label="Prénom"
                                    placeholder="Entrez le prénom"
                                    iconStart={<User />}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="username"
                            rules={{
                                required: { value: true, message: "Le nom d'utilisateur est obligatoire" },
                            }}
                            render={({ field }) => (
                                <Input
                                    error={errors.username ? true : false}
                                    {...field}
                                    helperText={errors.username ? errors.username.message : ''}
                                    type="text"
                                    label="Nom d'utilisateur"
                                    placeholder="Entrez le nom d'utilisateur"
                                    iconStart={<User />}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="provinceId"
                            rules={{
                                required: { value: true, message: 'La province est obligatoire' },
                            }}
                            render={({ field }) => (
                                <Autocomplete
                                    noOptionsText="Aucune option"
                                    autoHighlight
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    options={provinces.map((option) => option)}
                                    getOptionLabel={(option) => option.name}
                                    sx={{ width: '100%' }}
                                    defaultValue={provinces.find((item) => value?.province?.id === item.id)}
                                    onChange={(event, values) => {
                                        handleGetGroups(values?.id);
                                        setValue('provinceId', values?.id);
                                    }}
                                    renderInput={(params) => {
                                        return (
                                            <Input
                                                {...field}
                                                {...params}
                                                error={errors.provinceId ? true : false}
                                                helperText={errors.provinceId ? errors.provinceId.message : ''}
                                                label="La province"
                                                placeholder="Choisissez la province"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <MapPin />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    '& .MuiInputAdornment-root': {
                                                        marginTop: '0 !important',
                                                    },
                                                }}
                                            />
                                        );
                                    }}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="groupIds"
                            rules={{
                                required: { value: true, message: 'Les groupes est obligatoire' },
                                // validate: getValues().groupIds.length === 0 && ""
                            }}
                            render={({ field }) => (
                                <Autocomplete
                                    noOptionsText="Aucune option"
                                    multiple
                                    filterSelectedOptions
                                    autoHighlight
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    options={groups}
                                    getOptionLabel={(option) => option.name}
                                    sx={{ width: '100%' }}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip variant="outlined" label={option.name} {...getTagProps({ index })} />
                                        ))
                                    }
                                    onChange={(event, values) => {
                                        setValue(
                                            'groupIds',
                                            values.map((item) => item.id)
                                        );
                                    }}
                                    defaultValue={value.groups}
                                    renderInput={(params) => {
                                        return (
                                            <Input
                                                {...field}
                                                {...params}
                                                error={errors.groupIds ? true : false}
                                                helperText={errors.groupIds ? errors.groupIds.message : ''}
                                                label="Les groupes"
                                                placeholder="Choisissez les groupes"
                                                InputProps={{
                                                    ...params.InputProps,
                                                    disableUnderline: true,
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Squares2X2 />
                                                            {params.InputProps.startAdornment}
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    '& .MuiInputAdornment-root': {
                                                        marginTop: '0 !important',
                                                    },
                                                }}
                                            />
                                        );
                                    }}
                                />
                            )}
                        />
                        <Button type="submit">Modifier</Button>
                    </Stack>
                </form>
            </FormDialog>
        </>
    );
};

export default AdminEditGroup;
