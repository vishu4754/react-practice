import React from 'react';
import propTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { PrivateLayout } from '../layouts/index';

const PrivateRoutes = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <PrivateLayout>
            <Component {...matchProps} />
        </PrivateLayout>
      )} />
    )
  };

  export default PrivateRoutes;

  PrivateRoutes.propTypes = {

    component: propTypes.elementType.isRequired,
  
  };