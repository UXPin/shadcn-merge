import * as React from 'react';
import Tooltip from '../Tooltip';
import TooltipTrigger from '../../TooltipTrigger/TooltipTrigger';
import TooltipContent from '../../TooltipContent/TooltipContent';

export default (
  <Tooltip>
    <TooltipTrigger uxpId='tooltip-trigger'><span className='text-foreground'>Hover Me!</span></TooltipTrigger>
    <TooltipContent uxpId='tooltip-content'>Add to library</TooltipContent>
  </Tooltip>
);
