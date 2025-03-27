import * as React from 'react';
import ToggleGroup from '../ToggleGroup';
import ToggleGroupItem from '../../ToggleGroupItem/ToggleGroupItem';

export default (
  <ToggleGroup type='multiple' variant='outline' uxpId='toggle-group'>
    <ToggleGroupItem
      value='bold'
      aria-label='Toggle bold'
      uxpId='toggle-item-bold'
    >
      B
    </ToggleGroupItem>
    <ToggleGroupItem
      value='italic'
      aria-label='Toggle italic'
      uxpId='toggle-item-italic'
    >
      I
    </ToggleGroupItem>
    <ToggleGroupItem
      value='strikethrough'
      aria-label='Toggle strikethrough'
      uxpId='toggle-item-strikethrough'
    >
      S
    </ToggleGroupItem>
  </ToggleGroup>
);
