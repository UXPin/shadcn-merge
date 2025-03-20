import React from 'react';
import PropTypes from 'prop-types';
import { CollapsibleTrigger as CollapsibleTriggerM } from '../ui/collapsible';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/collapsible
 * @uxpindescription A button that toggles the collapsible content visibility.
 */
const CollapsibleTrigger = ({ className, children, ...props }) => {
  return (
    <CollapsibleTriggerM className={className} {...props}>
      {children}
    </CollapsibleTriggerM>
  );
};

CollapsibleTrigger.propTypes = {
  /** The text or content inside the trigger button */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default CollapsibleTrigger;
