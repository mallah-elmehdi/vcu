import { Autocomplete, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import { Button, FormDialog, Input } from '..';
import { isTheGroupNameUnique, updateGroup } from '../../api/admin';
import { actionFinished, actionInProgress, adminUpdateGroup, setAlert } from '../../context/actions';
import { MapPin, Squares2X2 } from '../../icons';

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
            name: '',
            provinceId: '',
        },
    });

    // ========== states
    const { states, dispatch } = useOutletContext();
    const { provinces } = states;

    // ========= submit
    const onSubmit = (data, event) => {
        event.preventDefault();

        isTheGroupNameUnique({ name: data.name, groupId: value.id }).then((isUnique) => {
            if (!isUnique) {
                setError('name', { message: 'Le nom est déjà utilisé' });
            } else {
                dispatch(actionInProgress());
                updateGroup({ ...data, groupId: value.id })
                    .then((group) => {
                        reset();
                        handleCloseDialog();
                        dispatch(adminUpdateGroup(group));
                        dispatch(
                            setAlert({
                                severity: 'success',
                                message: 'Groupe mis à jour avec succès',
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
        setValue('name', value?.name);
        setValue('provinceId', value?.province?.id);
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
                    color: theme.palette.common.white,
                })}
            >
                Modifier
            </Button>

            <FormDialog
                title="Modifier le groupe"
                open={openDialog}
                onClose={handleCloseDialog}
                action={<Button type="submit">Modifier</Button>}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Controller
                    control={control}
                    name="name"
                    rules={{
                        required: { value: true, message: 'Le nom du groupe est obligatoire' },
                    }}
                    render={({ field }) => (
                        <Input
                            error={errors.name ? true : false}
                            {...field}
                            helperText={errors.name ? errors.name.message : ''}
                            type="text"
                            label="Nom du groupe"
                            placeholder="Nom du groupe"
                            iconStart={<Squares2X2 />}
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

                {/* <Button type="submit">Modifier</Button> */}
            </FormDialog>
        </>
    );
};

export default AdminEditGroup;
