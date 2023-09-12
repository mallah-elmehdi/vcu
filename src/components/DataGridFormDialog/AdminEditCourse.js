import { Autocomplete, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import { Button, FormDialog, Input } from '..';
import { updateCourse } from '../../api/admin';
import { actionFinished, actionInProgress, adminUpdateCourse, setAlert } from '../../context/actions';
import { ClipboardDocument, DocumentDuplicate } from '../../icons';

const AdminEditCourse = ({ value }) => {
    // ======= Dialog
    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    // ========== Form
    const {
        formState: { errors },
        handleSubmit,
        control,
        reset,
        setValue,
    } = useForm({
        defaultValues: {
            name: '',
            type: '',
        },
    });

    // ========== states
    const { dispatch } = useOutletContext();

    // ========= submit
    const onSubmit = (data, event) => {
        event.preventDefault();

        dispatch(actionInProgress());
        updateCourse({ ...data, courseId: value.id })
            .then((course) => {
                reset();
                handleCloseDialog();
                dispatch(adminUpdateCourse(course));
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
    };

    useEffect(() => {
        setValue('name', value?.name);
        setValue('type', value?.type);
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
                        required: { value: true, message: 'Le nom du cours est obligatoire' },
                    }}
                    render={({ field }) => (
                        <Input
                            error={errors.name ? true : false}
                            {...field}
                            helperText={errors.name ? errors.name.message : ''}
                            type="text"
                            label="Nom du cours"
                            placeholder="Nom du cours"
                            iconStart={<ClipboardDocument />}
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="type"
                    rules={{
                        required: { value: true, message: 'Le type de cours est obligatoire' },
                    }}
                    render={({ field }) => (
                        <Autocomplete
                            noOptionsText="Aucune option"
                            autoHighlight
                            isOptionEqualToValue={(option, value) => option === value}
                            options={['SESSION', 'CHALLENGE'].map((option) => option)}
                            getOptionLabel={(option) => option}
                            sx={{ width: '100%' }}
                            defaultValue={['SESSION', 'CHALLENGE'].find((item) => value?.type === item)}
                            onChange={(event, values) => {
                                setValue('type', values);
                            }}
                            renderInput={(params) => {
                                return (
                                    <Input
                                        error={errors.type ? true : false}
                                        {...field}
                                        {...params}
                                        helperText={errors.type ? errors.type.message : ''}
                                        label="Le type de cours"
                                        placeholder="Choisissez le type de cours"
                                        InputProps={{
                                            ...params.InputProps,
                                            disableUnderline: true,
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <DocumentDuplicate />
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
            </FormDialog>
        </>
    );
};

export default AdminEditCourse;
