import * as React from 'react';
import DropdownMenuRadioGroup from '../DropdownMenuRadioGroup';
import DropdownMenuRadioItem from '../../DropdownMenuRadioItem/DropdownMenuRadioItem';

export default (
  <DropdownMenuRadioGroup uxpId='dropdown-menu-radio-group-1' value='option1'>
    <DropdownMenuRadioItem
      value='option1'
      uxpId='dropdown-menu-radio-group-item-1'
    >
      Option 1
    </DropdownMenuRadioItem>
    <DropdownMenuRadioItem
      value='option2'
      uxpId='dropdown-menu-radio-group-item-2'
    >
      Option 2
    </DropdownMenuRadioItem>
  </DropdownMenuRadioGroup>
);
