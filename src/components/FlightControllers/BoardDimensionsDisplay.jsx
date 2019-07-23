import React from 'react';

const BOARD_DIMENSIONS = {
  SIXTEEN: '16x16mm',
  TWENTY: '20x20mm',
  THIRTY: '30.5x30.5mm'
}

const BoardDimensionsDisplay = ({size}) => {
  return (
    <span>
      {BOARD_DIMENSIONS[size]}
    </span>
  );
};

export default BoardDimensionsDisplay;
