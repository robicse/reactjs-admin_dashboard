// material-ui
import { useContext } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import AccountProfile from './account-profile';
import AccountProfileDetails from './account-profile-details';
import AuthContext from 'context/authContext/AuthContext';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const { user } = useContext(AuthContext);

    console.log(user);
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Typography sx={{ mb: 3 }} variant="h4">
                    Account
                </Typography>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={6} xs={12}>
                        <AccountProfile user={user} />
                    </Grid>
                    <Grid item lg={8} md={6} xs={12}>
                        <AccountProfileDetails user={user} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SamplePage;
