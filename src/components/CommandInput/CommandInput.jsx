import React from 'react';
import PropTypes from 'prop-types';
import { CommandInput as CommandInputM } from '../ui/command';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/command
 * @uxpindescription Input field for command queries.
 */
const CommandInput = (...props) => {
  return <CommandInputM {...props} />;
};

CommandInput.propTypes = {
  /** Input value
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,
  /** Handler for search value change */
  onValueChange: PropTypes.func,
  /** Additional className for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default CommandInput;
