import React from 'react';
import PropTypes from 'prop-types';
import { SelectScrollDownButton as SelectScrollDownButtonM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription Button for scrolling down through options.
 */
const SelectScrollDownButton = ({ children, className, ...props }) => {
  return (
    <SelectScrollDownButtonM className={className} {...props}>
      {children}
    </SelectScrollDownButtonM>
  );
};

SelectScrollDownButton.propTypes = {
  /** The content of the SelectScrollDownButton. */
  children: PropTypes.node.isRequired,
  /** Additional className for styling. */
  className: PropTypes.string,
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
};

export default SelectScrollDownButton;
