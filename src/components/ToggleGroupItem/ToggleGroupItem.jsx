import React from 'react';
import PropTypes from 'prop-types';
import { ToggleGroupItem as ToggleGroupItemM } from '../ui/toggle-group';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toggle-group
 * @uxpindescription Individual toggle item within a ToggleGroup.
 */
const ToggleGroupItem = ({ children, className, ...props }) => {
  return (
    <ToggleGroupItemM className={className} {...props}>
      {children}
    </ToggleGroupItemM>
  );
};

ToggleGroupItem.propTypes = {
  /** Child components. */
  children: PropTypes.node,
  /** If true, renders the child component instead of the default element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** A string value for the toggle group item. All items within a toggle group should use a unique value. */
  value: PropTypes.string,
  /** When true, prevents the user from interacting with the toggle. */
  disabled: PropTypes.bool,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default ToggleGroupItem;
