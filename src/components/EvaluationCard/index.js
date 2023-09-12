import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { createEvaluation, getStudentsByGroupId, getStudentsByGroupIdAndBootcamp } from '../../api/dashboard';
import { Button, Card, FormDialog, Slider } from '../../components';
import { actionFinished, actionInProgress, dashboardStudents, setAlert } from '../../context/actions';

const EvaluationCard = ({ value }) => {
    // ======= variables
    const { group, id, evaluations } = value;

    // ======= Dialog
    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    // ========== states
    const { states, dispatch } = useOutletContext();
    const { dashboard } = states;
    const { courses, bootcamp } = dashboard || {};

    // ========== Form
    const [score, setScore] = React.useState(
        courses?.map((item) => ({
            courseId: item.id,
            score: evaluations?.find((evaluation) => evaluation.course.id === item.id)
                ? evaluations?.find((evaluation) => evaluation.course.id === item.id)?.score
                : 1,
        }))
    );

    useEffect(() => {
        setScore(
            courses?.map((item) => ({
                courseId: item.id,
                score: evaluations?.find((evaluation) => evaluation.course.id === item.id)
                    ? evaluations?.find((evaluation) => evaluation.course.id === item.id)?.score
                    : 1,
            }))
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [evaluations]);

    const handleChange = (id) => (event, newValue) =>
        setScore(score.map((item) => (id === item.courseId ? { ...item, score: newValue } : item)));

    const handleStudents = async (groupId) => {
        try {
            const students = await getStudentsByGroupId(groupId);
            return students;
        } catch (err) {
            dispatch(
                setAlert({
                    severity: 'error',
                    message: err,
                })
            );
        }
    };

    const handleEvalutions = (groupId, bootcamp) => {
        dispatch(actionInProgress());
        getStudentsByGroupIdAndBootcamp(groupId, bootcamp)
            .then(async (evaluations) => {
                dispatch(actionInProgress());
                const students = await handleStudents(groupId);

                try {
                    dispatch(
                        dashboardStudents(
                            students.map((student) => {
                                const studentsEvalutions = [];
                                for (let i = 0; i < evaluations.length; i++) {
                                    const evalution = evaluations[i];

                                    if (evalution.student.id === student.id) {
                                        studentsEvalutions.push(evalution);
                                    }
                                }

                                return { ...student, evaluations: studentsEvalutions };
                            })
                        )
                    );
                } catch (err) {
                    dispatch(
                        setAlert({
                            severity: 'error',
                            message: err,
                        })
                    );
                } finally {
                    dispatch(actionFinished());
                }
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

    // ========= submit
    const onSubmit = () => {
        for (let i = 0; i < score.length; i++) {
            const item = score[i];

            dispatch(actionInProgress());
            createEvaluation({ studentId: id, groupId: group.id, courseId: item.courseId, score: item.score, bootcamp: bootcamp?.name })
                .then((data) => {
                    handleCloseDialog();
                    dispatch(
                        setAlert({
                            severity: 'success',
                            message: 'Évaluation faite avec succès',
                        })
                    );
                    if (i + 1 === score.length) {
                        handleEvalutions(group.id, bootcamp?.name);
                    }
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
    };

    return (
        <>
            <Button
                onClick={handleOpenDialog}
                color={evaluations.length === 0 ? 'quaternary' : 'muted'}
                sx={(theme) => ({
                    fontSize: theme.fontSize.xs,
                    padding: theme.spacing(1, 2),
                    color: theme.palette.common.black,
                })}
            >
                {evaluations.length === 0 ? 'Évaluer' : 'Modifier'}
            </Button>
            <FormDialog
                title="Évaluation"
                open={openDialog}
                onClose={handleCloseDialog}
                onSubmit={null}
                action={
                    <Button type="submit" onClick={onSubmit}>
                        Évaluer
                    </Button>
                }
            >
                {courses.map((course) => {
                    const theScore = score.find((item) => item.courseId === course.id).score;

                    return (
                        <Card>
                            <Stack alignItems="center">
                                <Typography
                                    sx={(theme) => ({
                                        alignSelf: 'flex-start',
                                        color: theme.palette.common.black,
                                        fontSize: theme.fontSize.sm,
                                        lineHeight: 1,
                                        mb: 2,
                                    })}
                                >
                                    {course.name}
                                </Typography>
                                <Slider
                                    aria-label="Temperature"
                                    value={theScore}
                                    onChange={handleChange(course.id)}
                                    valueLabelDisplay="auto"
                                    step={0.25}
                                    marks
                                    min={1}
                                    max={5}
                                />
                                <Box display="flex" alignItems="flex-end">
                                    <Typography
                                        sx={(theme) => ({
                                            color: theme.palette[theScore <= 2 ? 'error' : theScore <= 3.5 ? 'warning' : 'success'].main,
                                            // color: theme.palette.primary.main,
                                            fontWeight: theme.fontWeight.bold,
                                            fontSize: theme.fontSize['2xl'],
                                            lineHeight: 1,
                                        })}
                                    >
                                        {theScore}
                                    </Typography>
                                    <Typography
                                        component="span"
                                        sx={(theme) => ({
                                            color: theme.palette.common.black,
                                            fontWeight: theme.fontWeight.light,
                                            fontSize: theme.fontSize['xl'],
                                            lineHeight: 1,
                                        })}
                                    >
                                        /5
                                    </Typography>
                                </Box>
                            </Stack>
                        </Card>
                    );
                })}
            </FormDialog>
        </>
    );
};

export default EvaluationCard;
