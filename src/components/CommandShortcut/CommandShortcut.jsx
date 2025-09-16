import React from 'react';
import PropTypes from 'prop-types';
import { CommandShortcut as CommandShortcutM } from '../ui/command';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/command
 * @uxpindescription Shortcut hint for a command item.
 */
const CommandShortcut = ({ children, className, ...props }) => {
  return (
    <CommandShortcutM className={className} {...props}>
      {children}
    </CommandShortcutM>
  );
};

CommandShortcut.propTypes = {
  /** CommandShortcut content */
  children: PropTypes.node,
  /** Additional className for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default CommandShortcut;
