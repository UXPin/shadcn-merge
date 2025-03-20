import * as React from 'react';
import Collapsible from '../Collapsible';
import CollapsibleContent from '../../CollapsibleContent/CollapsibleContent';
import CollapsibleTrigger from '../../CollapsibleTrigger/CollapsibleTrigger';
export default (
  <Collapsible uxpId='collapsible-1'>
    <CollapsibleTrigger uxpId='collapsible-trigger-1'>
      I am collapsible -- click me!
    </CollapsibleTrigger>
    <CollapsibleContent uxpId='collapsible-content-1'>
      This is the collapsible content
    </CollapsibleContent>
  </Collapsible>
);
