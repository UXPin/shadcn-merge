import React from 'react';
import PropTypes from 'prop-types';
import { Textarea as TextareaM } from '../ui/textarea';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/textarea
 * @uxpindescription A resizable multi-line input field for user text input.
 */
const Textarea = ({ className, ...props }) => {
  return <TextareaM className={className} {...props} />;
};

Textarea.propTypes = {
  /** The current value of the textarea
   *  @uxpinbind onChange 0.target.value
   */
  value: PropTypes.string,
  /** The default value of the textarea (uncontrolled) */
  defaultValue: PropTypes.string,
  /** Callback fired when the value changes */
  onChange: PropTypes.func,
  /** Text displayed when textarea is empty */
  placeholder: PropTypes.string,
  /** Whether the textarea is disabled */
  disabled: PropTypes.bool,
  /** Whether the textarea is read-only */
  readOnly: PropTypes.bool,
  /** Whether the field is required */
  required: PropTypes.bool,
  /** The name of the textarea for form submission */
  name: PropTypes.string,
  /** Number of visible text lines */
  rows: PropTypes.number,
  /** Maximum number of characters allowed */
  maxLength: PropTypes.number,
  /** Minimum number of characters required */
  minLength: PropTypes.number,
  /** Whether the textarea can be resized by the user */
  wrap: PropTypes.oneOf(['soft', 'hard', 'off']),
  /** Additional CSS classes
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** ARIA label for accessibility */
  'aria-label': PropTypes.string,
  /** ARIA describedby attribute for accessibility */
  'aria-describedby': PropTypes.string,
};

export default Textarea;
