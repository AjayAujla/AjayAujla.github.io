import React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Presets = () => (
  <div>
    <h3>Profit Target / Max Loss</h3>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button id="preset50">± $50</Button>
      <Button id="preset100">± $100</Button>
      <Button id="preset250">± $250</Button>
      <Button id="preset500">± $500</Button>
    </ButtonGroup>
  </div>
);

export default Presets;
