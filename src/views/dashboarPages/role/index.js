import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MaterialTable from 'material-table';
// material
import {
    Card,
    Table,
    Stack,
    Avatar,
    Button,
    Checkbox,
    TableRow,
    TableBody,
    TableCell,
    Container,
    Typography,
    TableContainer,
    TablePagination
} from '@mui/material';
import baseUrl from 'utils/baseUrl';
// components

export default function User() {
    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    User
                </Typography>
                <Button variant="contained" component={RouterLink} to="#">
                    New User
                </Button>
            </Stack>

            <Card>
                <MaterialTable
                    title="Role List"
                    columns={[
                        { title: 'Name', field: 'alias' }
                        // {
                        //     title: 'Status',
                        //     field: 'isActivate'
                        //     // lookup: { false: 'Deactived', true: 'Activated' }
                        // }
                    ]}
                    data={(query) =>
                        new Promise((resolve, reject) => {
                            let url = `${baseUrl}/api/roles/all?`;
                            // searching
                            if (query.search) {
                                url += `search=${query.search}`;
                            }
                            // sorting
                            // if (query.orderBy) {
                            //     url += `&sort=${query.orderBy.field}&order_by=${query.orderDirection}`;
                            // }

                            url += `&page=${query.page + 1}`;
                            fetch(url, {
                                method: 'GET'
                            })
                                .then((resp) => resp.json())
                                .then((resp) => {
                                    console.log(resp);
                                    resolve({
                                        data: resp?.details?.data,
                                        page: resp?.details?.paging?.pages - 1,
                                        totalCount: resp?.details?.paging?.total
                                    });
                                });
                        })
                    }
                    options={{
                        actionsColumnIndex: -1,
                        pageSize: 15
                        // rowStyle: {
                        //     fontSize: 12
                        // }
                    }}
                />
            </Card>
        </Container>
    );
}
