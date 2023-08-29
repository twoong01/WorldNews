import React from 'react';
import { Loader, PulsingBubble } from '../../styles/StyleSheet';

const LoadingSpinner = () => {
  return (
    <>
      <Loader>
        <PulsingBubble />
        <PulsingBubble />
        <PulsingBubble />
      </Loader>
    </>
  );
};

export default LoadingSpinner;
