import React, { useState } from 'react';
import { makeStyles, Card, CardHeader, CardBody, Grid, GridItem, Box, Button } from '@mui/material';
import cogoToast from 'cogo-toast';
// import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
// import RefreshIcon from '@material-ui/icons/Refresh';
// import GridContainer from 'components/Grid/GridContainer.js';
// import Card from 'components/Card/Card.js';
// import CardHeader from 'components/Card/CardHeader.js';
// import CardBody from 'components/Card/CardBody.js';
// import Gurd from '../../components/guard/Gurd';
// import axios from 'axios';
// import { useRootStore } from '../../models/root-store-provider';
// import { observer } from 'mobx-react-lite';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
// import Slide from '@material-ui/core/Slide';
// import { Box, Grid, Chip } from '@material-ui/core';
// import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
// import CreateWholesaleCustomer from '../../components/admin/whole_sale_customer/create';
// import EditWholesaleCustomer from '../../components/admin/whole_sale_customer/edit';
// import { baseUrl, webUrl } from '../../const/api';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import ErrorIcon from '@material-ui/icons/Error';
// import MaterialTable from 'material-table';
// import tableIcons from 'components/table_icon/icon';
// import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

const styles = {
    cardCategoryWhite: {
        '&,& a,& a:hover,& a:focus': {
            color: 'rgba(255,255,255,.62)',
            margin: '0',
            fontSize: '14px',
            marginTop: '0',
            marginBottom: '0'
        },
        '& a,& a:hover,& a:focus': {
            color: '#FFFFFF'
        }
    },
    cardTitleWhite: {
        color: '#FFFFFF',
        marginTop: '0px',
        minHeight: 'auto',
        fontWeight: '300',
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: '3px',
        textDecoration: 'none',
        '& small': {
            color: '#777',
            fontSize: '65%',
            fontWeight: '400',
            lineHeight: '1'
        }
    }
};

const useStyles = makeStyles(styles);

const TableList = () => {
    const a = '';

    return (
        <Grid container>
            <GridItem xs={12} sm={12} md={12}>
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
                    <CardBody />
                </Card>
            </GridItem>
        </Grid>
    );
};

export default TableList;
