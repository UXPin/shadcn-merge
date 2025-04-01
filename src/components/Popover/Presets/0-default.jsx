import * as React from 'react';
import Popover from '../Popover';
import PopoverTrigger from '../../PopoverTrigger/PopoverTrigger';
import PopoverContent from '../../PopoverContent/PopoverContent';
import Button from '../../Button/Button';
export default (
  <Popover uxpId='popover-1'>
    <PopoverTrigger uxpId='popover-trigger'>
      <Button uxpId='popover-button' variant='outline'>
        Open Popover
      </Button>
    </PopoverTrigger>
    <PopoverContent uxpId='popover-content'>
      Place content for the popover here.
    </PopoverContent>
  </Popover>
);
