import * as React from 'react';
import RadioGroup from '../RadioGroup';
import RadioGroupItem from '../../RadioGroupItem/RadioGroupItem';
import HtmlDiv from '../../HtmlComponents/HtmlDiv/HtmlDiv';
import Label from '../../Label/Label';

export default (
  <RadioGroup value='radio-2' uxpId='radio-group' className="text-foreground">
    <HtmlDiv className='flex items-center space-x-2' uxpId='radio-group-div-1'>
      <RadioGroupItem value='radio-1' id='r1' uxpId='radio-group-item-1' />
      <Label uxpId='radio-group-label-1'>Radio 1</Label>
    </HtmlDiv>
    <HtmlDiv className='flex items-center space-x-2' uxpId='radio-group-div-2'>
      <RadioGroupItem value='radio-2' id='r2' uxpId='radio-group-item-2' />
      <Label uxpId='radio-group-label-2'>Radio 2</Label>
    </HtmlDiv>
    <HtmlDiv className='flex items-center space-x-2' uxpId='radio-group-div-3'>
      <RadioGroupItem value='radio-3' id='r3' uxpId='radio-group-item-3' />
      <Label uxpId='radio-group-label-3'>Radio 3</Label>
    </HtmlDiv>
  </RadioGroup>
);
