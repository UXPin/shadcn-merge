import React from 'react';
import PropTypes from 'prop-types';
import { SelectItem as SelectItemM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription An individual option in the dropdown.
 */
const SelectItem = ({ children, className, ...props }) => {
  return (
    <SelectItemM className={className} {...props}>
      {children}
    </SelectItemM>
  );
};

SelectItem.propTypes = {
  /** The content of the select item. */
  children: PropTypes.node.isRequired,
  /** The value to associate with this item. */
  value: PropTypes.string.isRequired,
  /** When true, prevents the user from selecting the item. */
  disabled: PropTypes.bool,
  /** A string value used for typeahead purposes. */
  textValue: PropTypes.string,
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default SelectItem;
