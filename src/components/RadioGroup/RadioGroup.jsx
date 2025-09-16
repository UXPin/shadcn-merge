import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup as RadioGroupM } from '../ui/radio-group';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/radio-group
 * @uxpindescription Container for grouping radio inputs with keyboard navigation support.
 */
const RadioGroup = ({ children, className, ...props }) => {
  return (
    <RadioGroupM key={props.defaultValue} className={className} {...props}>
      {children}
    </RadioGroupM>
  );
};

RadioGroup.propTypes = {
  /** The content inside the RadioGroup. */
  children: PropTypes.node,
  /** Additional classes to style the  component.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Renders the component as a child element
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Default value for uncontrolled radio group */
  defaultValue: PropTypes.string,
  /** Controlled value of selected radio item
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,
  /** Callback when the selected value changes */
  onValueChange: PropTypes.func,
  /** Whether the radio group is disabled */
  disabled: PropTypes.bool,
  /** Name attribute for form integration */
  name: PropTypes.string,
  /** Requires a selection before form submission */
  required: PropTypes.bool,
  /** Layout direction of the radio items */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Text direction for the component */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** Enables looping with keyboard navigation */
  loop: PropTypes.bool,
};

export default RadioGroup;
