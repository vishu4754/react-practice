import React from 'react';
import Cards from '../../workinwithComponents/Cards/card';
import ButtonAppBar from '../../workinwithComponents/Navbar/NavBar';
import Box from '@material-ui/core/Box';

const HomePage = () => {

    return (
        <>
            <ButtonAppBar />
            <Box marginBottom="20px" marginTop="20px" width="70vw" />
            <Cards />
        </>
    );


}

export default HomePage;