import React from 'react';
import PropTypes from 'prop-types';
import { SelectSeparator as SelectSeparatorM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription Visual divider between items.
 */
const SelectSeparator = (props) => {
  return <SelectSeparatorM {...props} />;
};

SelectSeparator.propTypes = {
  /** Additional classes to style the  component. */
  className: PropTypes.string,
};

export default SelectSeparator;
