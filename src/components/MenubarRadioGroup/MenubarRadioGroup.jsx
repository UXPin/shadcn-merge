import React from 'react';
import PropTypes from 'prop-types';
import { MenubarRadioGroup as MenubarRadioGroupM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription Radio group for grouped menu selection.
 */
const MenubarRadioGroup = ({ children, className, ...props }) => {
  return (
    <MenubarRadioGroupM className={className} {...props}>
      {children}
    </MenubarRadioGroupM>
  );
};

MenubarRadioGroup.propTypes = {
  /** The selected value in the radio group
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,

  /** Callback function when the value changes */
  onValueChange: PropTypes.func,

  /** The content inside the radio group */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default MenubarRadioGroup;
