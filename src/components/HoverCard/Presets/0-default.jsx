import * as React from 'react';
import HoverCard from '../HoverCard';
import HoverCardTrigger from '../../HoverCardTrigger/HoverCardTrigger';
import HoverCardContent from '../../HoverCardContent/HoverCardContent';
import Button from '../../Button/Button';
export default (
  <HoverCard openDelay={200} closeDelay={100} uxpId='hover-card-1'>
    <HoverCardTrigger uxpId='hover-card-trigger-1'>
      <Button variant='link' uxpId='hover-card-button-1'>
        @HoverCard
      </Button>
    </HoverCardTrigger>
    <HoverCardContent
      sideOffset={5}
      align='center'
      uxpId='hover-card-content-1'
    >
      This is the hover card content.
    </HoverCardContent>
  </HoverCard>
);
