import React from 'react';
import PropTypes from 'prop-types';
import { ToggleGroup as ToggleGroupM } from '../ui/toggle-group';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toggle-group
 * @uxpindescription A group container for toggle items, supporting multiple or single selection.
 */
const ToggleGroup = ({ children, className, ...props }) => {
  return (
    <ToggleGroupM key={props.defaultValue} className={className} {...props}>
      {children}
    </ToggleGroupM>
  );
};

ToggleGroup.propTypes = {
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
  /** Determines whether a single or multiple items can be pressed at a time. */
  type: PropTypes.oneOf(['single', 'multiple']),
  /** The controlled value of the active item(s).
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /** The default value of the active item(s). Use when you do not need to control the state of the item(s). */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /** Event handler called when the value changes. */
  onValueChange: PropTypes.func,
  /** When true, prevents the user from interacting with the toggle group and all its items. */
  disabled: PropTypes.bool,
  /** When false, keyboard navigation will not loop from last item to first, and vice versa. */
  loop: PropTypes.bool,
  /** The orientation of the component, which determines how focus moves: 'horizontal' for left/right arrows and 'vertical' for up/down arrows. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** The reading direction of the toggle group when applicable. */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** When false, navigating through the items using arrow keys will be disabled. */
  rovingFocus: PropTypes.bool,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default ToggleGroup;
