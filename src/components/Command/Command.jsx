import React from 'react';
import PropTypes from 'prop-types';
import { Command as CommandM } from '../ui/command';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/command
 * @uxpindescription The root command interface component.
 */
const Command = ({ children, className, ...props }) => {
  return (
    <CommandM className={className} {...props}>
      {children}
    </CommandM>
  );
};

Command.propTypes = {
  /** Child nodes */
  children: PropTypes.node,
  /** Accessible label for this command menu. Not shown visibly. */
  label: PropTypes.string,
  /** Disable automatic filtering and sorting. */
  shouldFilter: PropTypes.bool,
  /** Custom filter function that returns a number from 0–1 for match quality. */
  filter: PropTypes.func,
  /** Initial value of the selected command item. */
  defaultValue: PropTypes.string,
  /** Controlled value of the selected command item.
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,
  /** Callback triggered when value changes. */
  onValueChange: PropTypes.func,
  /** Loop around navigation. */
  loop: PropTypes.bool,
  /** Disable selection with pointer events. */
  disablePointerSelection: PropTypes.bool,
  /** Enable or disable vim-style bindings (ctrl+j/k etc). */
  vimBindings: PropTypes.bool,
  /** Additional className for styling */
  className: PropTypes.string,
};

export default Command;
