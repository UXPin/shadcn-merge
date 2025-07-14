import * as React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as CheckboxM } from '../ui/checkbox';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/checkbox
 * @uxpindescription A control that allows the user to toggle between checked and not checked.
 */
function Checkbox(props) {
  return <CheckboxM {...props} />;
}

Checkbox.propTypes = {
  /**
   * @uxpinbind onCheckedChange 0
   */
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Checkbox;
