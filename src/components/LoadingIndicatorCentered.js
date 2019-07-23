import React from 'react';
import {BeatLoader} from 'react-spinners';

const LoadingIndicatorCentered = () => {
  return (
    <div className={'text-center mt-5'}>
      <BeatLoader
        sizeUnit={"px"}
        size={18}
        color={'#007bff'}
      />
    </div>

  );
};

export default LoadingIndicatorCentered;
