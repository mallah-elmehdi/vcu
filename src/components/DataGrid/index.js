import { Pagination as MuiPagination, PaginationItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    DataGrid as MuiDataGrid,
    gridFilteredTopLevelRowCountSelector,
    gridPageSelector,
    gridPageSizeSelector,
    useGridApiContext,
    useGridRootProps,
    useGridSelector,
} from '@mui/x-data-grid';
import React from 'react';

const customCheckbox = (theme) => {
    return {
        '& .MuiCheckbox-root svg': {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.darkMuted.main}`,
            borderRadius: theme.borderRadius.md,
        },
        '& .MuiCheckbox-root svg path': {
            display: 'none',
        },
        '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
            backgroundColor: theme.palette.tertiary.main,
            borderColor: theme.palette.tertiary.main,
        },
        '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
            position: 'absolute',
            display: 'table',
            border: '2px solid #fff',
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) translate(-50%,-50%)',
            opacity: 1,
            transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
            content: '""',
            top: '50%',
            left: '39%',
            width: 5.71428571,
            height: 9.14285714,
        },
        '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
            width: 8,
            height: 8,
            backgroundColor: theme.palette.tertiary.main,
            transform: 'none',
            top: '39%',
            border: 0,
        },
    };
};

export const DataGrid = styled((props) => <MuiDataGrid getRowHeight={() => 'auto'} {...props} />)(({ theme }) => ({
    border: 0,
    color: theme.palette.common.black,
    WebkitFontSmoothing: 'auto',
    borderRadius: 0,
    width: '100%',

    // '& .MuiDataGrid-columnsContainer': {},

    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-withBorderColor': {
        borderRadius: 0,
    },
    '& .MuiDataGrid-columnHeader': {
        color: theme.palette.common.black,
        fontSize: theme.fontSize.md,
        backgroundColor: theme.palette.darkMuted.main,
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid ${theme.palette.darkMuted.main}`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid ${theme.palette.darkMuted.main}`,
        fontSize: theme.fontSize.sm,
    },
    '& .MuiDataGrid-cell': {
        color: theme.palette.common.black,
        justifyContent: 'center',
        padding: theme.spacing(1),
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
    },
    '& .MuiDataGrid-footerContainer': {
        borderTop: `1px solid ${theme.palette.darkMuted.main}`,
        padding: theme.spacing(3),
        borderLeft: 0,
        borderRight: 0,
        borderBottom: 0,
    },
    ...customCheckbox(theme),
}));

const getPageCount = (rowCount, pageSize) => {
    if (pageSize > 0 && rowCount > 0) {
        return Math.ceil(rowCount / pageSize);
    }

    return 0;
};

export const Pagination = () => {
    // const apiRef = useGridApiContext();
    // const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
    // const visibleTopLevelRowCount = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector);
    // const pageCount = getPageCount(useGridRootProps.rowCount ?? visibleTopLevelRowCount, pageSize);

    const apiRef = useGridApiContext();
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
    const page = useGridSelector(apiRef, gridPageSelector);
    const visibleTopLevelRowCount = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector);
    const rootProps = useGridRootProps();
    const pageCount = getPageCount(rootProps.rowCount ?? visibleTopLevelRowCount, pageSize);

    return (
        <MuiPagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={page + 1}
            count={pageCount}
            renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
            pageSizeOptions={[5, 10, 25]}
        />
    );
};
