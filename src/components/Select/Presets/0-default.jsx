import * as React from 'react';
import Select from '../Select';
import SelectContent from '../../SelectContent/SelectContent';
import SelectGroup from '../../SelectGroup/SelectGroup';
import SelectItem from '../../SelectItem/SelectItem';
import SelectLabel from '../../SelectLabel/SelectLabel';
import SelectScrollDownButton from '../../SelectScrollDownButton/SelectScrollDownButton';
import SelectScrollUpButton from '../../SelectScrollUpButton/SelectScrollUpButton';
import SelectSeparator from '../../SelectSeparator/SelectSeparator';
import SelectTrigger from '../../SelectTrigger/SelectTrigger';
import SelectValue from '../../SelectValue/SelectValue';

export default (
  <Select uxpId='select'>
    <SelectTrigger uxpId='select-trigger'>
      <SelectValue placeholder='Select a fruit' uxpId='select-value' />
    </SelectTrigger>
    <SelectContent uxpId='select-content'>
      <SelectGroup uxpId='select-group'>
        <SelectLabel uxpId='select-label'>Fruits</SelectLabel>
        <SelectItem value='apple' uxpId='select-item-apple'>
          Apple
        </SelectItem>
        <SelectItem value='banana' uxpId='select-item-banana'>
          Banana
        </SelectItem>
        <SelectItem value='blueberry' uxpId='select-item-blueberry'>
          Blueberry
        </SelectItem>
        <SelectSeparator uxpId='select-seperator-1' />
        <SelectItem value='grapes' uxpId='select-item-grapes'>
          Grapes
        </SelectItem>
        <SelectItem value='pineapple' uxpId='select-item-pineapple'>
          Pineapple
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);
