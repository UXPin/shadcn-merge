import React from 'react';
import PropTypes from 'prop-types';
import { SelectLabel as SelectLabelM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription Label for a group of select items.
 */
const SelectLabel = ({ children, className, ...props }) => {
  return (
    <SelectLabelM className={className} {...props}>
      {children}
    </SelectLabelM>
  );
};

SelectLabel.propTypes = {
  /** The content of the Label. */
  children: PropTypes.node.isRequired,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default SelectLabel;
