import React from 'react';
import UseViewport from './UseViewport';

export const withHooksHOC = (Component: any) => {
  return (props: any) => {
    const screenWidth = UseViewport();

    return <Component width={width} {...props} />;
  };
};