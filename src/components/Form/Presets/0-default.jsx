import * as React from 'react';
import Form from '../Form';
import FormControl from '../../FormControl/FormControl';
import FormDescription from '../../FormDescription/FormDescription';
import FormField from '../../FormField/FormField';
import FormItem from '../../FormItem/FormItem';
import FormLabel from '../../FormLabel/FormLabel';
import FormMessage from '../../FormMessage/FormMessage';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

export default (
  <Form uxpId='form-1'>
    <FormItem uxpId='form-item-username'>
      <FormLabel uxpId='form-label-username'>Username</FormLabel>
      <FormControl uxpId='form-control-username'>
        <Input placeholder='shadcn' uxpId='input-username' />
      </FormControl>
      <FormDescription uxpId='form-description-username'>
        This is your public display name.
      </FormDescription>
      <FormMessage uxpId='form-message-username' />
    </FormItem>
    <Button type='submit' uxpId='button-submit'>
      Submit
    </Button>
  </Form>
);
