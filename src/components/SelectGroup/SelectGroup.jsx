import React from 'react';
import PropTypes from 'prop-types';
import { SelectGroup as SelectGroupM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription Groups related options together.
 */
const SelectGroup = ({ children, className, ...props }) => {
  return (
    <SelectGroupM className={className} {...props}>
      {children}
    </SelectGroupM>
  );
};

SelectGroup.propTypes = {
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** The content of the group. */
  children: PropTypes.node,
};

export default SelectGroup;
