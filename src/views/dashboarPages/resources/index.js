import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Grid, Box, Button } from '@mui/material';
import cogoToast from 'cogo-toast';

const TableList = () => {
    const a = '';

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <Grid container spacing={1}>
                            <Grid container item xs={3} spacing={3} direction="column">
                                <Box p={2}>
                                    <h4> List</h4>
                                </Box>
                            </Grid>
                            <Grid container item xs={9} spacing={3} direction="row" justify="flex-end" alignItems="center">
                                <Button variant="contained" color="primary">
                                    Create Whole Sale Customer
                                </Button>
                            </Grid>
                        </Grid>
                    </CardHeader>
                    <CardContent />
                </Card>
            </Grid>
        </Grid>
    );
};

export default TableList;
