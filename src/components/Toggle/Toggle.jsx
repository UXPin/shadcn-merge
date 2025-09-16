import React from 'react';
import PropTypes from 'prop-types';
import { Toggle as ToggleM } from '../ui/toggle';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toggle
 * @uxpindescription A two-state button that can be toggled on or off.
 */
const Toggle = ({ children, className, ...props }) => {
  return (
    <ToggleM key={props.defaultPressed} className={className} {...props}>
      {children}
    </ToggleM>
  );
};

Toggle.propTypes = {
  /** Child components. */
  children: PropTypes.node,
  /** The variant of the toggle. */
  variant: PropTypes.oneOf(['default', 'outline']),
  /** The size of the toggle. */
  size: PropTypes.oneOf(['default', 'sm', 'lg']),
  /** If true, renders the child component instead of the default element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** The pressed state of the toggle when it is initially rendered. Use when you do not need to control its pressed state. */
  defaultPressed: PropTypes.bool,
  /** The controlled pressed state of the toggle.
   * @uxpinbind onPressedChange 0
   */
  pressed: PropTypes.bool,
  /** Event handler called when the pressed state of the toggle changes. */
  onPressedChange: PropTypes.func,
  /** When true, prevents the user from interacting with the toggle. */
  disabled: PropTypes.bool,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default Toggle;
