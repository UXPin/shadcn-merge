import React from 'react';
import PropTypes from 'prop-types';
import { Switch as SwitchM } from '../ui/switch';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/switch
 * @uxpindescription A toggle component that lets users switch between two states.
 */
const Switch = ({ className, ...props }) => {
  return <SwitchM className={className} {...props} />;
};

Switch.propTypes = {
  /** When true, changes the component to render as its child component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** The initial checked state of the switch when rendered. */
  defaultChecked: PropTypes.bool,
  /** The controlled checked state of the switch.
   * @uxpinbind onCheckedChange 0
   */
  checked: PropTypes.bool,
  /** Event handler called when the checked state changes. */
  onCheckedChange: PropTypes.func,
  /** When true, disables user interaction with the switch. */
  disabled: PropTypes.bool,
  /** When true, the switch must be checked before form submission. */
  required: PropTypes.bool,
  /** The name of the switch, submitted with its owning form as part of a name/value pair. */
  name: PropTypes.string,
  /** The value given as data when submitted with a name. */
  value: PropTypes.string,
};

export default Switch;
