'use client';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import PropTypes from 'prop-types';

import { Button } from '../ui/button';
import {
  Form as FormM,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export default function Form(props) {
  // ...
  const form = useForm();

  return <div className={props.className}><FormM {...form}>{props.children}</FormM></div>;
}
Form.propTypes = {
  /** The content inside the dropdown sub-menu */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};
