import * as React from 'react';
import Tooltip from '../Tooltip';
import TooltipTrigger from '../../TooltipTrigger/TooltipTrigger';
import TooltipContent from '../../TooltipContent/TooltipContent';

export default (
  <Tooltip uxpId='tooltip'>
    <TooltipTrigger uxpId='tooltip-trigger'>Hover Me!</TooltipTrigger>
    <TooltipContent uxpId='tooltip-content'>Add to library</TooltipContent>
  </Tooltip>
);
