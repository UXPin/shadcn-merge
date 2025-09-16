import React from 'react';
import PropTypes from 'prop-types';
import { CommandSeparator as CommandSeparatorM } from '../ui/command';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/command
 * @uxpindescription Visual separator between command items.
 */
const CommandSeparator = (props) => {
  return <CommandSeparatorM {...props} />;
};

CommandSeparator.propTypes = {
  /** Always render even when filtering */
  alwaysRender: PropTypes.bool,
  /** Additional className for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default CommandSeparator;
