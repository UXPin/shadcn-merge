import * as React from 'react';
import FormItem from '../FormItem';
import FormControl from '../../FormControl/FormControl';
import FormDescription from '../../FormDescription/FormDescription';
import FormLabel from '../../FormLabel/FormLabel';
import FormMessage from '../../FormMessage/FormMessage';
import Input from '../../Input/Input';

export default (
  <FormItem uxpId='formitem-1'>
    <FormLabel uxpId='form-label-username'>Username</FormLabel>
    <FormControl uxpId='form-control-username'>
      <Input placeholder='shadcn' uxpId='input-username' />
    </FormControl>
    <FormDescription uxpId='form-description-username'>
      This is your public display name.
    </FormDescription>
    <FormMessage uxpId='form-message-username' />
  </FormItem>
);
