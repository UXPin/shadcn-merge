import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroupItem as RadioGroupItemM } from '../ui/radio-group';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/radio-group
 * @uxpindescription Individual radio item inside a RadioGroup.
 */
const RadioGroupItem = ({ children, className, ...props }) => {
  return (
    <RadioGroupItemM className={className} {...props}>
      {children}
    </RadioGroupItemM>
  );
};

RadioGroupItem.propTypes = {
  /** Content inside the item */
  children: PropTypes.node,
  /** Additional classes to style the  component.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,

  /** If true, renders the component as its child component
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Unique value for this radio item
   */
  value: PropTypes.string.isRequired,
  /** If true, disables the radio item */
  disabled: PropTypes.bool,
  /** If true, this item must be selected */
  required: PropTypes.bool,
};

export default RadioGroupItem;
