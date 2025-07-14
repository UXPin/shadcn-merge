import React from 'react';
import PropTypes from 'prop-types';
import { Collapsible as CollapsibleM } from '../ui/collapsible';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/collapsible
 * @uxpindescription A component that allows hiding and showing content with a toggle button.
 */
const Collapsible = ({
  open,
  defaultOpen,
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <CollapsibleM
      key={props.defaultOpen}
      open={open}
      defaultOpen={defaultOpen}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </CollapsibleM>
  );
};

Collapsible.propTypes = {
  /** If true, the collapsible will be open by default */
  defaultOpen: PropTypes.bool,

  /** If true, the collapsible will be open
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,

  /** If true, the collapsible interaction is disabled */
  disabled: PropTypes.bool,

  /** The content inside the collapsible container */
  children: PropTypes.node,

  /** Additional class names for styling */
  className: PropTypes.string,

  /** Event handler called when the open state of the collapsible changes. */
  onOpenChange: PropTypes.func,
};

export default Collapsible;
