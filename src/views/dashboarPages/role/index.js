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
                    title="Admin List"
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Mobile', field: 'mobile' },
                        { title: 'Email', field: 'email' },
                        { title: 'Address', field: 'address' },
                        {
                            title: 'Status',
                            field: 'isActivate',
                            lookup: { false: 'Deactived', true: 'Activated' }
                        }
                    ]}
                    data={[]}
                    // data={(query) =>
                    //     new Promise((resolve, reject) => {
                    //         let url = `${baseUrl}/pos_sale_customer_list_pagination_with_search?`;
                    //         // searching
                    //         if (query.search) {
                    //             url += `search=${query.search}`;
                    //         }
                    //         // sorting
                    //         // if (query.orderBy) {
                    //         //     url += `&sort=${query.orderBy.field}&order_by=${query.orderDirection}`;
                    //         // }

                    //         url += `&page=${query.page + 1}`;
                    //         fetch(url, {
                    //             method: 'post',
                    //             headers: { Authorization: `Bearer ${user.auth_token}` }
                    //         })
                    //             .then((resp) => resp.json())
                    //             .then((resp) => {
                    //                 resolve({
                    //                     data: resp.data,
                    //                     page: resp?.meta?.current_page - 1,
                    //                     totalCount: resp?.meta?.total
                    //                 });
                    //             });
                    //     })
                    // }
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
