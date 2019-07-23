import React from 'react';
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import styled from 'styled-components/macro'

const CustomStoreTooltip = styled.div`
  background: #fff;
  border: 1px solid ${`#3a3938;`}
  max-width: 300px;
  padding: 15px;
`

const TooltipOsd = (props) => {
  console.log("props", props)
  return (
    <OverlayTrigger overlay={
      <CustomStoreTooltip id="tooltip-disabled">
        AKA On-Screen-Display overlays textual content onto your video. This denotes products that have a built in OSD chip. This is most often the Betaflight OSD which can be managed
        through the betaflight software. Without this you must build in a separate OSD chip if you wish to have an OSD.
      </CustomStoreTooltip>

    }>
      <span className="d-inline-block">{props.children}</span>
    </OverlayTrigger>
  );
};

export default TooltipOsd;

TooltipOsd.defaultProps = {
  children: 'ℹ️'
}
