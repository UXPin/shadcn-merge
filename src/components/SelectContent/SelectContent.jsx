import React from 'react';
import PropTypes from 'prop-types';
import { SelectContent as SelectContentM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription Wrapper for dropdown options.
 */
const SelectContent = ({ children, className, ...props }) => {
  return (
    <SelectContentM className={className} {...props}>
      {children}
    </SelectContentM>
  );
};

SelectContent.propTypes = {
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Event handler called when focus moves to the trigger after closing. */
  onCloseAutoFocus: PropTypes.func,
  /** Event handler called when the escape key is down. Can be prevented. */
  onEscapeKeyDown: PropTypes.func,
  /** Event handler called when an interaction happens outside the content. Can be prevented. */
  onPointerDownOutside: PropTypes.func,
  /** The preferred alignment against the trigger. */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /** The distance in pixels from the trigger. */
  sideOffset: PropTypes.number,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** The content of the select dropdown. */
  children: PropTypes.node.isRequired,
};

export default SelectContent;
